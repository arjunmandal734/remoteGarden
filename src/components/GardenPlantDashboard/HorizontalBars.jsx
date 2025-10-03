import { motion } from "framer-motion";

export default function StatBar({ label, value, color }) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <motion.div
          className={`h-4 rounded-full`}
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{value}%</p>
    </div>
  );
}