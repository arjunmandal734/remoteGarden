import { useState } from "react";
import PlantProfileForStoreCard from "../components/plantStore/PlantProfileForStoreCard";
import CategoryFilter  from "../components/plantStore/CategoryFilter";
import FullImageCard from "../components/plantStore/FullImageCard"
const samplePlants = [
  {
    imageUrl: "/plantInages/plant1.png",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    price: 120,
    tags: ["Medicinal", "Indoor"],
    available: true,
    growthType: "Easy",
    growthDuration: "2–3 months",
  },
  {
    imageUrl: "/plantInages/plant2.png",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    price: 180,
    tags: ["Indoor", "Air Purifying"],
    available: true,
    growthType: "Easy",
    growthDuration: "3–4 months",
  },
  {
    imageUrl: "/plantInages/plant3.png",
    name: "Hybrid Tea Rose",
    scientificName: "Rosa × hybrida",
    price: 90,
    tags: ["Flowering", "Outdoor"],
    available: false,
    growthType: "Medium",
    growthDuration: "4–6 months",
  },
  {
    imageUrl: "/plantInages/plant4.png",
    name: "Holy Basil (Tulsi)",
    scientificName: "Ocimum tenuiflorum",
    price: 60,
    tags: ["Medicinal", "Outdoor"],
    available: true,
    growthType: "Easy",
    growthDuration: "1–2 months",
  },
  {
    imageUrl: "/plantInages/plant5.png",
    name: "Golden Pothos Money Plant",
    scientificName: "Epipremnum aureum",
    price: 75,
    tags: ["Indoor", "Low Maintenance"],
    available: true,
    growthType: "Easy",
    growthDuration: "2–3 months",
  },
  {
    imageUrl: "/plantInages/plant6.png",
    name: "Lucky Bamboo",
    scientificName: "Dracaena sanderiana",
    price: 150,
    tags: ["Indoor", "Decorative"],
    available: true,
    growthType: "Medium",
    growthDuration: "3–5 months",
  },
  {
    imageUrl: "/plantInages/plant1.png",
    name: "English Lavender",
    scientificName: "Lavandula angustifolia",
    price: 130,
    tags: ["Flowering", "Fragrant"],
    available: false,
    growthType: "Hard",
    growthDuration: "6–8 months",
  },
];


export default function PlantStore() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlants =
    selectedCategory === "All"
      ? samplePlants
      : samplePlants.filter((plant) => plant.tags.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-6 py-10">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">🛒 Plant Store</h1>
      <p className="text-center text-sm text-gray-600 mb-8">Browse and buy your favorite plants</p>

      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredPlants.map((plant, index) => (
          <PlantProfileForStoreCard key={index} {...plant} />
        ))}
      </div>
    </div>
  );
}