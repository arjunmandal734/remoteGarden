import PlantCard from "../cards/PlantCard";

const plants = [
  {
    plantId: "PL001",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    price: 299,
    imageUrl: "../../../plantInages/plant1.png",
  },
  {
    plantId: "PL002",
    name: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    price: 349,
    imageUrl: "../../../plantInages/plant2.png",
  },
  {
    plantId: "PL003",
    name: "Red Lily",
    scientificName: "Spathiphyllum willson",
    price: 459,
    imageUrl: "../../../plantInages/plant3.png",
  },
  {
    plantId: "PL004",
    name: "Oriza sat",
    scientificName: "Monolya wallisii",
    price: 129,
    imageUrl: "../../../plantInages/plant4.png",
  },
  {
    plantId: "PL005",
    name: "Black Spider",
    scientificName: "Spathiphyllum wallisii",
    price: 321,
    imageUrl: "../../../plantInages/plant5.png",
  },
];

export default function PlantSection({ title = "plantType" }) {
  return (
    <div className="pt-10 px-6">
      <h1 className="text-2xl font-bold text-green-800 bg-emerald-50 py-3 px-4 rounded-md shadow-sm mb-6 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {plants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
}
