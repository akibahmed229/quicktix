"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState, useEffect, use } from "react";
import getSingleEvent from "@/db/query/getSingleEvent";
import bookTickets from "@/db/query/bookTickets";
import { useRouter } from "next/navigation";
import { supabase } from "@/db";
import CheckoutLoading from "./loading";

export default function Checkout({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // unwraps the Promise
  const router = useRouter();
  const [tickets, setTickets] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Fetch event data
  useEffect(() => {
    async function fetchEvent() {
      const e = await getSingleEvent(id);
      setEvent(e);
    }

    fetchEvent();

    // Get current logged in user
    async function currentUserSession() {
      supabase.auth.getSession().then(({ data }) => {
        setUserId(data.session?.user.id ?? null);
      });
    }

    currentUserSession();
  }, [id]);

  const handleTicketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTickets(Number(e.target.value));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!event || !userId) return;

    setLoading(true);

    const result = await bookTickets({ eventId: event.id, userId, tickets });

    setLoading(false);

    if (result.success) {
      alert("Booking successful!");
      router.push("/"); // redirect
    } else {
      alert("Booking failed!");
    }
  };

  if (!event) return <CheckoutLoading />;

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col justify-center items-center py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side - Shipping Details */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Shipping Details
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <textarea
                placeholder="Full Address"
                rows={3}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              ></textarea>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Order Summary
            </h2>

            {/* Ticket selection */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800 dark:text-gray-200">
                {event.title}
              </span>
              <select
                value={tickets}
                onChange={handleTicketChange}
                className="border p-2 rounded-lg dark:bg-gray-700 dark:border-gray-600"
              >
                <option value={1}>1 Ticket</option>
                <option value={2}>2 Tickets</option>
                <option value={3}>3 Tickets</option>
              </select>
            </div>

            {/* Price Calculation */}
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-gray-800 dark:text-gray-200">
                Price per ticket
              </span>
              <span className="text-gray-800 dark:text-gray-200">
                {event.price} tk
              </span>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                Subtotal
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {event.price * tickets} tk
              </span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
