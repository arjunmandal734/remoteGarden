export default function PricingCard({ name, price, features }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full sm:w-80 hover:shadow-lg hover:scale-[1.02] transition duration-300">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-green-700">{name}</h3>
        <p className="text-lg text-gray-800 mt-1">{price}</p>
      </div>

      {/* Features */}
      <ul className="text-sm text-gray-600 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="w-full bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300">
        Choose Plan
      </button>
    </div>
  );
}