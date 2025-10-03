export default function PlanBenefitsCard({
  image,
  title,
  description,
  benefits,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-6 w-full mb-8">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-full"
      />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-green-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <ul className="space-y-2 text-sm text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✅</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
