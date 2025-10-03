export default function GardenPlantCard({
  imageUrl,
  name,
  scientificName,
  plantationDate,
  lastWateredDate,
  lastWateredTime,
  lastFertilized,
  growthStatus,
}) {
  return (
    
    <div className="bg-white rounded-xl shadow-md p-4 text-left space-y-2">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold text-green-800">{name}</h3>
      <p className="text-sm italic text-gray-600">{scientificName}</p>

      <p className="text-xs text-gray-500">Planted on: {plantationDate}</p>
      <p className="text-xs text-gray-500">
        Last watered: {lastWateredDate} at {lastWateredTime}
      </p>
      <p className="text-xs text-gray-500">Last fertilized: {lastFertilized}</p>

      <p className="text-xs font-medium text-green-600">
        Growth status: <span className="italic">{growthStatus}</span>
      </p>

      <div className="flex gap-2 pt-2">
        <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded">
          Water
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded">
          Fertilize
        </button>
      </div>
    </div>
  );
}
