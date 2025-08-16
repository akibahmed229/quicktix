export default function Loading() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
        {/* Image skeleton */}
        <div className="w-full h-96 bg-gray-300 dark:bg-gray-600" />

        {/* Text details skeleton */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          {/* Date */}
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
          {/* Category */}
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
          {/* Location */}
          <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
          {/* Button & Price */}
          <div className="flex items-center justify-between mt-6">
            <div className="h-10 w-40 bg-gray-300 dark:bg-gray-600 rounded mt-4"></div>
            <div className="h-4 w-12 bg-gray-300 dark:bg-gray-600 rounded text-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
