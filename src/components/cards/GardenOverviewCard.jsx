import StatCard from "./StatCard";

export default function GardenOverviewCard({ growthProgress }) {
  return (
    <div className="w-full px-4 py-6 text-gray-800">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-800">
          Welcome to Your Remote Garden
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          Watch your plants grow from anywhere. We handle the care—you enjoy the
          growth!
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <StatCard
          title="Snake Plant"
          number={12}
          adjective="Thriving"
          icon="🌿"
        />
        <StatCard
          title="Peace Lily"
          number={8}
          adjective="Blooming"
          icon="🌸"
        />
        <StatCard title="Red Lily" number={5} adjective="Healthy" icon="🍃" />
        <StatCard
          title="Oriza Sat"
          number={3}
          adjective="Sprouting"
          icon="🌱"
        />
      </div>

      {/* Growth Progress Bar */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-600 mb-2">
          Overall Growth Progress
        </p>
        <div className="relative w-full sm:w-2/3 mx-auto h-4 bg-green-100 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full animate-pulse"
            style={{ width: `${growthProgress}%` }}
          ></div>
        </div>
        <p className="text-xs text-green-700 mt-2">{growthProgress}%</p>
      </div>
    </div>
  );
}
