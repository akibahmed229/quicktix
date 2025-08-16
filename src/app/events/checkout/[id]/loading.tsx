export default function CheckoutLoading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10 px-4 animate-pulse">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side - Shipping Details */}
        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-4">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-4">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>

          {/* Ticket selection placeholder */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
          </div>

          {/* Price placeholders */}
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>

          {/* Button placeholder */}
          <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-full mt-4"></div>
        </div>
      </div>
    </div>
  );
}
