export default function FullImageCard({
  imageUrl,
  name,
  scientificName,
  price,
  tags,
  available,
  growthType,
  growthDuration,
}) {
  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-1"
        loading="lazy"
        
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-between text-white">
        {/* Top Tags */}
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag, index) => (
            <span key={index} className="bg-green-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Middle Info */}
        <div>
          <h3 className="text-lg font-bold truncate z-2">{name}</h3>
          <p className="text-xs italic text-gray-200 z-2">{scientificName}</p>
          <div className="text-xs mt-2 space-y-1 ">
            <p>🌿 Growth: <span className="font-medium z-2">{growthType}</span></p>
            <p>⏱️ Duration: <span className="font-medium z-2">{growthDuration}</span></p>
          </div>
        </div>

        {/* Bottom Button */}
        <button
          disabled={!available}
          className={`w-full py-2 rounded text-sm font-semibold transition z-2${
            available
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          {available ? `Buy for ₹${price}` : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}