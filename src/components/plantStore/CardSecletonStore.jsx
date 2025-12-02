// --- 1. Shimmer CSS Definition ---
// This style block defines the shimmer animation once for the whole component.
const ShimmerStyle = () => (
  <style>
    {`
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    .shimmer-effect {
      /* YouTube-style gray base */
      background-color: #f3f3f3; 
      /* Gradient for the moving light effect */
      background: linear-gradient(to right, #f3f3f3 0%, #ecebeb 20%, #f3f3f3 40%);
      background-size: 1000px 100%;
      animation: shimmer 1.5s infinite linear;
    }
    `}
  </style>
);

// --- 2. Skeleton Loading Card Component ---
const SkeletonPlantCard = () => {
  return (
    <>
      <ShimmerStyle />
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm">
        {/* Image Placeholder (h-40 matches the original card) */}
        <div className="h-40 w-full shimmer-effect"></div>

        {/* Content Placeholder */}
        <div className="p-4">
          {/* Plant Name Placeholder */}
          <div className="shimmer-effect h-6 w-3/4 rounded-md mb-2"></div>

          {/* Scientific Name Placeholder */}
          <div className="shimmer-effect h-3 w-1/2 rounded-md mb-4"></div>

          {/* Tags Placeholder */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="shimmer-effect h-5 w-16 rounded-full"></div>
            <div className="shimmer-effect h-5 w-20 rounded-full"></div>
            <div className="shimmer-effect h-5 w-14 rounded-full"></div>
          </div>

          {/* Growth Info Placeholders */}
          <div className="space-y-3 mb-4 pt-1">
            <div className="shimmer-effect h-3 w-11/12 rounded-md"></div>
            <div className="shimmer-effect h-3 w-4/5 rounded-md"></div>
            <div className="shimmer-effect h-3 w-full rounded-md mt-1"></div>
          </div>

          {/* Button Placeholder */}
          <div className="shimmer-effect h-10 w-full rounded-lg mt-3"></div>
        </div>
      </div>
    </>
  );
};


export default SkeletonPlantCard;