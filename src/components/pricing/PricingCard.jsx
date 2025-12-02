const colors = {
  Sprout: "bg-gradient-to-r from-green-600 via-green-400 to-green-600",
  Bloom: "bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600",
  Thrive: "bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600",
};

const borderColors = {
  Sprout: "border-green-400",
  Bloom: "border-yellow-500",
  Thrive: "border-purple-500",
};

const labelStyles = {
  Sprout: "bg-green-500",
  Bloom: "bg-yellow-500",
  Thrive: "bg-purple-600",
};

export default function PricingCard({
  plan,
  price,
  features,
  label,
  slogan,
  imageUrl,
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-6 w-full sm:w-80 border-4 ${borderColors[plan]} hover:scale-[1.03] transition duration-300 shadow-md`}
    >
      {/* Label Badge */}
      {label && (
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 ${labelStyles[plan]} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}
        >
          {label}
        </div>
      )}

      {/* Image Centered Top */}
      <div className="flex justify-center mb-4">
        <img
          src={imageUrl}
          alt={plan}
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>

      {/* Header */}
      <div className="mb-4 text-center">
        <h3
          className={`text-xl font-extrabold text-transparent bg-clip-text ${colors[plan]}`}
        >
          {plan}
        </h3>
        <p className="text-lg text-green-800 font-semibold mt-1">
          <span className="bg-green-100 px-2 py-1 rounded shadow-sm">
            <span>₹</span>
            {price}
            <span>/month</span>
          </span>
        </p>
      </div>

      {/* Features */}
      <ul className="text-sm text-gray-700 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2 hover:text-green-600 transition duration-200"
          >
            <span className="text-green-500 font-bold">
              {plan === "Thrive" ? "🌟" : plan === "Bloom" ? "💫" : "✓"}
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {/* Closing Line */}
      <p className="text-center text-green-500 italic text-sm mt-10 py-3">
       {slogan}
      </p>

      {/* CTA Button */}
      <button className="w-full bg-gradient-to-r from-green-700 cursor-pointer to-green-700 text-white hover:text-black px-4 py-2 rounded-full font-semibold shadow-md hover:from-green-600 hover:via-green-300 hover:to-green-600 transition duration-300">
        Subscribe plan
      </button>
    </div>
  );
}
