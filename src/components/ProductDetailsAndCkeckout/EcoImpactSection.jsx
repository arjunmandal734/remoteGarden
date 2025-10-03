export default function EcoImpactSection() {
  return (
    <>
      {/* Eco Impact Section */}
      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-md p-6 animate-fade-in">
        <h3 className="text-xl font-bold text-green-700 mb-4">
          🌍 Your Impact on Nature
        </h3>
        <ul className="space-y-4 text-gray-700 text-sm">
          <li className="flex items-start gap-3 hover:scale-[1.02] transition">
            <span className="text-green-500 text-xl">🌿</span>
            <span>
              <strong>Carbon Offset:</strong> Each plant absorbs CO₂, helping
              reduce your carbon footprint.
            </span>
          </li>
          <li className="flex items-start gap-3 hover:scale-[1.02] transition">
            <span className="text-blue-400 text-xl">💧</span>
            <span>
              <strong>Water Conservation:</strong> Remote planting uses
              optimized irrigation, saving up to 15 liters monthly.
            </span>
          </li>
          <li className="flex items-start gap-3 hover:scale-[1.02] transition">
            <span className="text-yellow-500 text-xl">🐝</span>
            <span>
              <strong>Biodiversity Boost:</strong> Your plant supports
              pollinators like bees and butterflies.
            </span>
          </li>
          <li className="flex items-start gap-3 hover:scale-[1.02] transition">
            <span className="text-brown-500 text-xl">🌾</span>
            <span>
              <strong>Soil Health:</strong> Roots stabilize soil and prevent
              erosion, improving long-term fertility.
            </span>
          </li>
          <li className="flex items-start gap-3 hover:scale-[1.02] transition">
            <span className="text-gray-600 text-xl">🌬️</span>
            <span>
              <strong>Air Purification:</strong> Plants naturally filter toxins
              and improve air quality — even remotely.
            </span>
          </li>
          <li className="flex items-start gap-3 hover:scale-[1.02] transition">
            <span className="text-green-700 text-xl">🤝</span>
            <span>
              <strong>Community Empowerment:</strong> Your contribution supports
              local nurseries and sustainable jobs.
            </span>
          </li>
        </ul>
        <p className="mt-6 text-green-600 font-medium text-sm italic text-center animate-slide-up">
          Every plant you sponsor is a quiet revolution — a step toward healing
          the planet, one root at a time.
        </p>
      </div>
    </>
  );
}
