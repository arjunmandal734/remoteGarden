import ButtonSection from "./ButtonSection";

export default function TopSectionOfGardenPlant({ plant }) {
  return (
    <>
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-2">
        🌱 Your {plant.name}
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 text-center italic mb-6">
        Planted on {plant.datePlanted} • {plant.location} Nursery • ID: #{plant.id}
      </p>

      {/* Image + Stats Row */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start mb-12">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg w-full h-[250px] sm:h-[300px] md:h-[380px]">
          <img
            src={plant.imageUrl}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Stats + Actions */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col justify-between h-auto">
          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
            <p><strong>Scientific Name:</strong> <span className="italic">{plant.scientificName}</span></p>
            <p><strong>Growth Type:</strong> {plant.growthType}</p>
            <p><strong>Growth Duration:</strong> {plant.growthDuration}</p>
            <p><strong>Total Days to Grow:</strong> {plant.totalDaysToGrow} days</p>
            <p><strong>Growth Difficulty:</strong> <span className="font-medium text-yellow-600">{plant.growthDifficulty}</span></p>
            <p><strong>Last Watered:</strong> {plant.lastWatered}</p>
            <p><strong>Last Fertilized:</strong> {plant.lastFertilized}</p>
            <p><strong>Current Age:</strong> {plant.currentAgeDays} days</p>
            <p><strong>Plant Type:</strong> {plant.plantType}</p>
            <p><strong>Plant Health:</strong> <span className="font-semibold text-green-600">{plant.health}%</span></p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4">
            <ButtonSection />
          </div>
        </div>
      </div>
    </>
  );
}
