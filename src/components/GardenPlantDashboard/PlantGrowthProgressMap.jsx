export default function PlantGrowthProgressMap({ growthSteps }) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
      <h3 className="text-xl font-bold text-green-700 mb-6 text-center">
        🧭 Your Plant's Journey
      </h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-gray-700 mb-6">
        {growthSteps.map((step, index) => (
          <li key={index} className="flex flex-col items-center text-center">
            <div className="text-2xl">{step.icon}</div>
            <div className="font-semibold text-green-600 mt-1">
              {step.label}
            </div>
            <div>{step.title}</div>
          </li>
        ))}
      </ul>
      <div className="relative w-full h-2 bg-green-100 rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full animate-grow-bar"
          style={{ width: "100%" }}
        ></div>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-1">
          {growthSteps.map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
