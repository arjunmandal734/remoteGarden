export default function ButtonSection() {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
        💧 Water Plant
      </button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition">
        🌿 Fertilize
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition">
        🎥 See Live Stream
      </button>
    </div>
  );
}
