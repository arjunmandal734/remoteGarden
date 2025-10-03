export default function CategoryFilter({ selected, onSelect }) {
  const categories = ["All", "Indoor", "Outdoor", "Medicinal", "Flowering"];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded ${
            selected === cat ? "bg-green-600 text-white" : "bg-white border border-green-300 hover:bg-green-50"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}