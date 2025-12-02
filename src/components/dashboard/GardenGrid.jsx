import { motion } from "framer-motion";

export default function GardenGrid({ buckets }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-green-50 p-4 rounded-xl shadow-md">
      {buckets.map((bucket, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-2 text-center shadow-sm cursor-pointer"
        >
          <p className="font-bold text-green-700">🪴 {bucket.name}</p>
          <p className="text-xs text-gray-600">{bucket.status}</p>
        </motion.div>
      ))}
    </div>
  );
}