export default function PlantProfileForStoreCard({
  imageUrl,
  name,
  botanicalName,
  price,
  tags,
  available,
  careLevel,
  growthDuration,
  co2Offset
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full hover:shadow-lg transition">
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-1">
        {/* Plant Name */}
        <h3 className="text-lg font-bold text-green-700 truncate">{name}</h3>

        {/* Scientific Name */}
        <p className="text-xs italic text-gray-500 mb-2">{botanicalName}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs text-white mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-green-500 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Growth Info */}
        <div className="text-xs text-gray-600 mb-1">
          <p>🌿Care Level: <span className="font-medium">{careLevel}</span></p>
          <p>⏱️Growth Duration: <span className="font-medium">{growthDuration}months</span></p>
           <p className="text-center text-green-500 mt-1">Removes {co2Offset} kg/month CO₂💨</p>
        </div>

        {/* Buy Button */}
        <button
          disabled={!available}
          className={`w-full py-2 rounded text-sm font-semibold ${
            available
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {available ? `Add to Garden – ₹${price}` : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}