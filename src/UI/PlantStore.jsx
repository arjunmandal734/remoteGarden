import { useState } from "react";
//import CategoryFilter from "../components/plantStore/CategoryFilter";
import PlantStoreListSection from "../components/plantStore/PlantStoreListSection";
import { usePlantStore } from "../hooks/usePlantStore";
import { PlantStoreEndSection } from "../components/plantStore/PlantStoreEndSection";
import { LoadingPlantProfilesSection } from "../components/plantStore/LoadingPlantProfilesSection";
import PageHeading from "../components/plantStore/PageHeading";

export default function PlantStore() {
  const { plants, loading, hasMore, error } = usePlantStore();
  //const [selectedCategory, setSelectedCategory] = useState("All");

  // const filteredPlants =
  //   selectedCategory === "All"
  //     ? plants
  //     : plants.filter((plant) => plant.tags?.includes(selectedCategory));


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 pt-25 pb-10 px-6">
      <PageHeading />

      {/* <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      /> */}

      
      <PlantStoreListSection filteredPlants={plants} />

      <LoadingPlantProfilesSection loading={loading} length={plants.length} />
      <PlantStoreEndSection hasMore={hasMore} length={plants.length} />
    </div>
  );
}