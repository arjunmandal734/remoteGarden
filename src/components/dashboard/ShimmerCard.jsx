export default function ShimmerCard() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md animate-pulse w-full sm:w-64">
      <div className="h-6 bg-green-100 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-green-100 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-green-100 rounded w-2/3"></div>
    </div>
  );
}