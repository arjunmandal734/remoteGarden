import { useState } from "react";
import EcoImpactSection from "../components/ProductDetailsAndCkeckout/EcoImpactSection";
import ImpactPurchesText from "../components/ProductDetailsAndCkeckout/ImpactPurchesText";
import PlantGrowthRoadmap from "../components/ProductDetailsAndCkeckout/PlantGrowthRoadmap";

export default function ProductDetails({ plant }) {
  const totalPrice = plant.price;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-6 py-10 mt-7 animate-fade-in">
      {/* Title */}
      <h1 className="text-3xl font-bold text-green-800 text-center mb-10 animate-slide-down">
        🌱Let Your Plant Take Root
      </h1>

      {/* 3-Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start animate-slide-up">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg h-[400px] animate-glow">
          <img
            src={plant.imageUrl}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Center: Plant Details */}
        <div className="bg-white rounded-xl shadow-md p-6 h-[400px] flex flex-col justify-start">
          <h2 className="text-2xl font-bold text-green-700">{plant.name}</h2>
          <p className="text-sm italic text-gray-500">{plant.scientificName}</p>

          <div className="flex flex-wrap gap-2 text-xs mt-2">
            {plant.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-500 text-white px-2 py-1 rounded hover:scale-105 transition"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-700 space-y-1 mt-4">
            <p>
              🌿 Growth Type:{" "}
              <span className="font-medium">{plant.growthType}</span>
            </p>
            <p>
              ⏱️ Avg Duration:{" "}
              <span className="font-medium">{plant.growthDuration}</span>
            </p>
            <p>
              📦 Availability:{" "}
              <span
                className={`font-semibold ${
                  plant.available ? "text-green-600" : "text-red-500"
                }`}
              >
                {plant.available ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="text-lg font-semibold text-green-700 mt-4">
              Price: ₹{plant.price}
            </p>
          </div>
        </div>

        {/* Right: What You Will Get */}
        <div className="bg-white rounded-xl shadow-md p-6 h-[400px] flex flex-col justify-start">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            🌱 What You Will Get
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Remote planting in our verified nursery</li>
            <li>Live growth tracking via your dashboard</li>
            <li>Digital certificate with plant ID</li>
            <li>Option to name and share your plant</li>
            <li>Eco-impact stats: CO₂ offset, water saved</li>
            <li>Seasonal care tips and priority support</li>
          </ul>
        </div>
      </div>

      {/* Purches impact text*/}
      <ImpactPurchesText />
      
      {/* Confirm Button */}
      <div className="mt-10 text-center animate-slide-up">
        <button className="bg-green-600 cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition hover:scale-105 shadow-md animate-pulse">
          Confirm Purchase
        </button>
      </div>

      {/* Plant road map*/}
      <PlantGrowthRoadmap />

      {/* Eco Impact Section */}
      <EcoImpactSection />

    </div>
  );
}
