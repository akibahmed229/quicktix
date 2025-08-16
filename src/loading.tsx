export default function Loading() {
  // Skeleton loader for 6 events (same as your grid)
  const skeletons = Array.from({ length: 6 });

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Upcoming Events
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skeletons.map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden animate-pulse"
            >
              {/* Image skeleton */}
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-600" />

              {/* Text skeleton */}
              <div className="p-4 space-y-3">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
                <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button skeleton */}
        <div className="text-center mt-10">
          <div className="mx-auto h-12 w-40 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
        </div>
      </div>
    </section>
  );
}
