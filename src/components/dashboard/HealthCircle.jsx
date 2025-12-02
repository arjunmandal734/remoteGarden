import { motion } from "framer-motion";

export default function HealthCircle({ health }) {
  const color = health > 75 ? "green" : health > 40 ? "yellow" : "red";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className={`w-24 h-24 rounded-full border-8 border-${color}-500 flex items-center justify-center`}>
        <span className="text-lg font-bold text-${color}-700">{health}%</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">Health Status 🌿</p>
    </motion.div>
  );
}