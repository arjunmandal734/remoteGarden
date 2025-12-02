export default function StatCard({ title, number, adjective, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center w-full">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold text-green-800 mt-2">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{number}</p>
      <p className="text-sm text-green-600 italic">{adjective}</p>
    </div>
  );
}