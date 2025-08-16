"use client";

import Link from "next/link";
import Image from "next/image";
import { Event } from "@/types/Event";
import getSingleEvent from "@/db/query/getSingleEvent";
import { useState, useEffect, use } from "react";
import Loading from "./loading";

export default function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    async function getEvent() {
      const data: Event = await getSingleEvent(id);
      setEvent(data);
    }
    getEvent();
  }, [id]);

  if (!event) return <Loading />;

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Event Image */}
        <Image
          src={event.image_url}
          alt={event.title}
          width={800}
          height={600}
          className="w-full h-96 object-cover"
        />

        {/* Event Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {event.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            📅 {event.date}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            📍 {event.location}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            🔖 {event.category}
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {event.description}
          </p>

          <div className="flex items-center justify-between mt-6">
            <Link
              href={`/events/checkout/${event.id}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Book Ticket
            </Link>
            <span className="text-gray-900 dark:text-gray-100 font-bold text-lg">
              {event.price} tk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
