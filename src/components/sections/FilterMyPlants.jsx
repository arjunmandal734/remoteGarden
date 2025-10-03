import GardenPlantCard from "../cards/GardenPlantCard";

const gardenPlants = [
  {
  imageUrl: "/plantImages/plant2.png",
  name:"Snake Plant",
  scientificName:"Sansevieria trifasciata",
  plantationDate:"2025-07-12",
  lastWateredDate:"2025-09-28",
  lastWateredTime:"10:30 AM",
  lastFertilized:"2025-09-20",
  growthStatus:"Healthy",
  },
  {
  imageUrl: "/plantImages/plant2.png",
  name:"Snake Plant",
  scientificName:"Sansevieria trifasciata",
  plantationDate:"2025-07-12",
  lastWateredDate:"2025-09-28",
  lastWateredTime:"10:30 AM",
  lastFertilized:"2025-09-20",
  growthStatus:"Healthy",
  },
    {
  imageUrl: "/plantImages/plant2.png",
  name:"Snake Plant",
  scientificName:"Sansevieria trifasciata",
  plantationDate:"2025-07-12",
  lastWateredDate:"2025-09-28",
  lastWateredTime:"10:30 AM",
  lastFertilized:"2025-09-20",
  growthStatus:"Healthy",
  },
    {
  imageUrl: "/plantImages/plant2.png",
  name:"Snake Plant",
  scientificName:"Sansevieria trifasciata",
  plantationDate:"2025-07-12",
  lastWateredDate:"2025-09-28",
  lastWateredTime:"10:30 AM",
  lastFertilized:"2025-09-20",
  growthStatus:"Healthy",
  },
  // Add more plants as needed
];

export default function FilterMyPlantSection() {
  return (
    <div className="pt-10 px-6">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          All
        </button>
        <button className="bg-white border border-green-300 px-4 py-2 rounded hover:bg-green-50">
          Recently Watered
        </button>
        <button className="bg-white border border-green-300 px-4 py-2 rounded hover:bg-green-50">
          Needs Fertilizing
        </button>
        <button className="bg-white border border-green-300 px-4 py-2 rounded hover:bg-green-50">
          New Additions
        </button>
      </div>

      {/* Garden Plant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gardenPlants.map((plant, index) => (
          <GardenPlantCard key={index} {...plant} />
        ))}
      </div>
    </div>
  );
}
