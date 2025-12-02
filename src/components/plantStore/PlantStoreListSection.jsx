import PlantProfileForStoreCard from "../plantStore/PlantProfileForStoreCard";

export default function PlantStoreListSection({filteredPlants}) {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredPlants.map((plant, index) => (
          <PlantProfileForStoreCard key={index} {...plant} />
        ))}
      </div>
  
  );
}
