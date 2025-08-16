"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import getEventImage from "@/db/query/getEventImage";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  // Fetch images from Supabase
  useEffect(() => {
    async function fetchImages() {
      try {
        const fetchedImages = await getEventImage(); // must return an array of URLs
        if (fetchedImages) {
          setImages(fetchedImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  // Auto slideshow when images are loaded
  useEffect(() => {
    if (images.length === 0) return; // don't start if no images

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    // make sure old timers don’t keep running in the background
    return () => clearInterval(interval);
  }, [images]); // depend on images

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 flex justify-center items-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`min-w-[50%] min-h-[50%] object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col justify-center items-center text-center max-w-5xl mx-auto h-dvh px-4">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to QuickTix
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Your gateway to concerts, sports, theatre, and more — book instantly,
          anywhere.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4">
          <Link
            href="/events"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Browse Events
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
