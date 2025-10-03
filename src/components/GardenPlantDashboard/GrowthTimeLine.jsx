export default function GrowthTimeLine({growthSteps}) {
  return (
    <div className="max-w-5xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        🌱 Growth Timeline
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
        {growthSteps.map((step, index) => (
          <li
            key={index}
            className="relative bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center hover:z-1 hover:scale-[1.03] transition duration-300 group"
          >
            {/* Connector Line */}
            {index !== growthSteps.length - 1 && (
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[2px] h-6 bg-green-300"></div>
            )}

            {/* Icon with pulse */}
            <div className="text-3xl group-hover:animate-bounce transition duration-300">
              {step.icon}
            </div>

            {/* Label */}
            <div className="font-semibold text-green-600 mt-2 text-base">
              {step.label}
            </div>

            {/* Title */}
            <div className="mt-1 text-gray-600">{step.title}</div>

            {/* Badge */}
            <span className="mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium shadow-sm">
              {step.badge}
            </span>

            {/* Tooltip on hover */}
            <div className="absolute bottom-[-40px] opacity-0 group-hover:opacity-100 transition text-xs text-gray-500 bg-white border rounded-md px-2 py-1 shadow-md pointer-events-none">
              Milestone {index + 1} of {growthSteps.length}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
