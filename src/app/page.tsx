import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center min-h-screen">
      <main className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto h-dvh px-4">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
          Welcome to QuickTix
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
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
