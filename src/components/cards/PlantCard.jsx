export default function PlantCard({ plant, onAddToGarden }) {
  const { plantId, name, scientificName, price, imageUrl } = plant;

  return (
    <div
      key={plantId}
      className="bg-white rounded-md shadow-sm overflow-hidden transform transition hover:scale-105 hover:shadow-md max-w-[250px] mx-auto"
    >
      {/* Square image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full aspect-square object-cover"
      />

      {/* Card content */}
      <div className="p-2">
        <h2 className="text-sm font-semibold text-green-700 truncate">{name}</h2>
        <p className="text-[10px] italic text-gray-500 truncate">{scientificName}</p>

        {/* Price and Button Row */}
        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm font-bold text-green-600">₹{price}</div>
          <button
            onClick={() => onAddToGarden(plant)}
            className="bg-green-600 text-white text-[10px] px-2 py-[2px] rounded hover:bg-green-700 transition cursor-pointer"
          >
            Add to Garden
          </button>
        </div>
      </div>
    </div>
  );
}