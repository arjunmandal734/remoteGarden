import React from "react";
import TopSectionOfGardenPlant from "../components/GardenPlantDashboard/TopSectionOfGardenPlant";
import Dashboard from "../components/GardenPlantDashboard/GardenPlantStatsSection";
import CompactDashboard from "../components/GardenPlantDashboard/CompactDashboard";
import PlantGrowthProgressMap from "../components/GardenPlantDashboard/PlantGrowthProgressMap";
import PlantStageGallery from "../components/GardenPlantDashboard/PlantStageGallery";
import GrowthTimeLine from "../components/GardenPlantDashboard/GrowthTimeLine";
import MapLocationViewer from "../components/GardenPlantDashboard/MapLocationViewer";

export default function GardenPlantDashboard({ plants }) {
  const plant = {
    id: "ALV-9321",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    imageUrl: "/plantInages/plant1.png",
    datePlanted: "Sept 12, 2025",
    location: "Nadia",
    growthType: "Succulent",
    growthDuration: "3–4 months",
    totalDaysToGrow: 90,
    growthDifficulty: "Easy",
    lastWatered: "Oct 2, 2025",
    lastFertilized: "Sept 28, 2025",
    currentAgeDays: 21,
    plantType: "Stem",
    health: 85,
  };
  const growthSteps = [
    { icon: "🪴", label: "Day 1", title: "Planted", badge: "Planted" },
    { icon: "📷", label: "Day 3", title: "Photo Update", badge: "First Photo" },
    {
      icon: "📈",
      label: "Week 2",
      title: "Growth Tracking",
      badge: "Tracking Started",
    },
    {
      icon: "🎓",
      label: "Month 1",
      title: "Certificate Issued",
      badge: "Certified",
    },
    {
      icon: "🌿",
      label: "Month 2",
      title: "Leaf Expansion",
      badge: "Leaf Milestone",
    },
    {
      icon: "🌼",
      label: "Month 3",
      title: "Pollination Ready",
      badge: "Pollination Stage",
    },
  ];

  const careTips = [
    "💧 Water every 10–14 days in dry seasons",
    "🌤️ Ensure indirect sunlight for 4–6 hours/day",
    "🌱 Avoid overwatering — roots prefer dry cycles",
    "🧪 Use organic compost once a month",
    "🛡️ Watch for leaf discoloration or pests",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-6 py-10">
      {/* Header */}
      <TopSectionOfGardenPlant plant={plant} />

      {/* Image Gallery + Compact Dashboard */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
        {/* Left Column: Gallery + Map */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-4">
            <PlantStageGallery />
          </div>

          <MapLocationViewer
            location={{
              lat: 23.4921,
              lng: 88.2506,
              name: "Nadia Green Nursery",
            }}
          />
        </div>

        {/* Right Column: Compact Dashboard */}
        <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-xl shadow-md p-0">
          <CompactDashboard />
        </div>
      </div>

      {/* Roadmap Progress Bar */}
      <PlantGrowthProgressMap growthSteps={growthSteps} />

      {/* Growth Timeline */}
      <GrowthTimeLine growthSteps={growthSteps} />

      {/* Care Tips */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-lg font-semibold text-green-700 mb-2 text-center">
          🌱 Care Tips
        </h2>
        <ul className="text-sm text-gray-700 space-y-2">
          {careTips.map((tip, index) => (
            <li key={index} className="hover:scale-[1.02] transition">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Eco Impact */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-lg font-semibold text-green-700 mb-2 text-center">
          🌍 Eco Impact
        </h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            🌿 CO₂ Offset: <strong>{plant.co2Offset} kg/year</strong>
          </li>
          <li>
            💧 Water Saved: <strong>15 liters/month</strong>
          </li>
          <li>
            🐝 Biodiversity Support: <strong>Pollinator-friendly</strong>
          </li>
          <li>
            🤝 Community Impact: <strong>Supports local growers</strong>
          </li>
        </ul>
      </div>

      {/* Closing Line */}
      <p className="text-center text-green-600 italic text-sm mt-10">
        “Every leaf is a reminder that you chose to grow something good.”
      </p>
    </div>
  );
}
