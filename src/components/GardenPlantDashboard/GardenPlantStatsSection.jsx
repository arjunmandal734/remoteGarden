import HealthProgressCircle from "./HealthProgressCircle";
import StatBar from "./HorizontalBars";
import GrowthChart from "./GrowthChart";
import WeatherStats from "./WeatherStats";

export default function Dashboard() {
  const growthData = [
    { date: "Sep 1", height: 12 },
    { date: "Sep 10", height: 18 },
    { date: "Sep 20", height: 25 },
    { date: "Sep 30", height: 32 },
  ];

  return (
    <div className="px-4 py-1 bg-gradient-to-br from-green-50 via-green-100 to-green-200 min-h-screen space-y-3 ">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-1">
        🌿 Plant Stats
      </h1>

      <WeatherStats temperature={28} humidity={65} wind={12} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthProgressCircle label="Plant Health" percentage={85} />
        <HealthProgressCircle label="Growth Rate" percentage={70} />
        <HealthProgressCircle label="Root Strength" percentage={60} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <StatBar label="Moisture Level" value={65} color="#3b82f6" />
        <StatBar label="Sun Intensity" value={80} color="#f59e0b" />
      </div>

      <GrowthChart data={growthData} />
    </div>
  );
}
