export default function PlantGrowthRoadmap() {
  const steps = [
    { icon: "🪴", label: "Day 1", title: "Planting Begins" },
    { icon: "📷", label: "Day 3", title: "First Photo Update" },
    { icon: "📈", label: "Week 2", title: "Growth Tracking Starts" },
    { icon: "🎓", label: "Month 1", title: "Certificate Issued" },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16 bg-white rounded-xl shadow-md p-6 animate-fade-in ">
      <h3 className="text-xl font-bold text-green-700 mb-6 text-center">🌿 What Happens After You Plant</h3>

      {/* Roadmap List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700 mb-10">
        {steps.map((step, index) => (
          <li key={index} className="flex flex-col items-center text-center animate-slide-up">
            <div className="text-3xl">{step.icon}</div>
            <div className="font-semibold text-green-600 mt-2">{step.label}</div>
            <div className="mt-1">{step.title}</div>
          </li>
        ))}
      </ul>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-green-100 rounded-full">
        <div className="absolute top-0 left-0 h-2 bg-green-500 rounded-full animate-grow-bar" style={{ width: "100%" }}></div>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-1">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md hover:scale-110 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}