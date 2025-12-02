export default function PricingCardSkeleton() {
  return (
    <div className="relative bg-white rounded-2xl p-6 w-full sm:w-80 border-4 border-gray-200 shadow-md animate-pulse">
      {/* Label Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-300 text-transparent text-xs font-semibold px-3 py-1 rounded-full shadow-md w-24 h-6"></div>

      {/* Image Placeholder */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-300"></div>
      </div>

      {/* Header Placeholder */}
      <div className="mb-4 text-center">
        <div className="h-6 w-32 mx-auto bg-gray-300 rounded mb-2"></div>
        <div className="h-5 w-20 mx-auto bg-gray-200 rounded"></div>
      </div>

      {/* Features Placeholder */}
      <ul className="space-y-3 mb-6">
        {[1, 2, 3].map((_, i) => (
          <li key={i} className="h-4 bg-gray-200 rounded w-full"></li>
        ))}
      </ul>

      {/* Button Placeholder */}
      <div className="w-full h-10 bg-gray-300 rounded-full"></div>
    </div>
  );
}
