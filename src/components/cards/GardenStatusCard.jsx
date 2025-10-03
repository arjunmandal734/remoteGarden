export default function GardenStatusCard({
  waterNeeded = 12,
  fertilizerNeeded = 5,
  totalPlants = 16,
  newGrowth = 2,
}) {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
     
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {/* Water Needed */}
        <div className="bg-green-50 rounded-lg p-3 shadow-sm">
          <div className="text-xl mb-1">💧</div>
          <p className="text-xs text-gray-600">Water Needed</p>
          <p className="text-lg font-bold text-green-700">{waterNeeded}</p>
        </div>

        {/* Fertilizer Needed */}
        <div className="bg-yellow-50 rounded-lg p-3 shadow-sm">
          <div className="text-xl mb-1">🌾</div>
          <p className="text-xs text-gray-600">Fertilizer Needed</p>
          <p className="text-lg font-bold text-yellow-700">
            {fertilizerNeeded}
          </p>
        </div>

        {/* Total Plants */}
        <div className="bg-blue-50 rounded-lg p-3 shadow-sm">
          <div className="text-xl mb-1">🪴</div>
          <p className="text-xs text-gray-600">Total Plants</p>
          <p className="text-lg font-bold text-blue-700">{totalPlants}</p>
        </div>

        {/* New Growth */}
        <div className="bg-purple-50 rounded-lg p-3 shadow-sm">
          <div className="text-xl mb-1">🌱</div>
          <p className="text-xs text-gray-600">New Growth Seen</p>
          <p className="text-lg font-bold text-purple-700">{newGrowth}</p>
        </div>
      </div>
    </div>
  );
}
