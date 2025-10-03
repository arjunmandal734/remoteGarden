import { useDashboardData } from "../context/DashboardContext";
import PlantSection from "../components/sections/PlantTypeSection";
import GardenOverviewCard from "../components/cards/GardenOverviewCard";

export default function Dashboard() {
  const { dashboardData, loading } = useDashboardData();

  if (loading)
    return <p className="pt-20 px-6 text-gray-500">Loading dashboard...</p>;

  return (
    <div className="pt-20 px-6 bg-emerald-50">
      <GardenOverviewCard
        totalPlants={12}
        notifications="2 new plants added this week!"
        growthProgress={65}
      />

      <PlantSection title="Featured" plants={dashboardData.featured} />
      <PlantSection title="New Arrivals" plants={dashboardData.newArrivals} />
      <PlantSection title="Best Sellers" plants={dashboardData.bestSellers} />
    </div>
  );
}
