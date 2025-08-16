"use client";

import Image from "next/image";
import Link from "next/link";
import getAllEvents from "@/db/query/getAllEvents";
import { Event } from "@/types/Event";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function EventSection() {
  const [events, setEvents] = useState<Event[] | null | undefined>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const events: Event[] | null | undefined = await getAllEvents();
        setEvents(events!);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Upcoming Events
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {events?.map((event: Event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              <Image
                src={event.image_url}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                unoptimized
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {event.date} • {event.location}
                </p>
                <Link
                  href={`/events/${event.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/events"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
