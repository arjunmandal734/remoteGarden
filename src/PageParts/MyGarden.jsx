import { useGardenData } from "../context/GardenContext";
import TopSectionForMyGarden from "../components/sections/TopSectionForMyGarden";
import FilterMyPlantSection from "../components/sections/FilterMyPlants";
import GardenStatusCard from "../components/cards/GardenStatusCard";


export default function MyGarden() {
  const { gardenData, loading } = useGardenData();
  if (loading)
    return <p className="text-center py-10">Loading your garden...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 ">

      {/* Section Title */}
      <TopSectionForMyGarden />

      {/* My Garden Info Card*/}
      <GardenStatusCard />

      {/* Filter Options */}
      <FilterMyPlantSection/>
    </div>
  );
}
