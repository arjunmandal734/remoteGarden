import { motion } from "framer-motion";

export default function PlantOverviewCard({ name, status, lastWatered, stage }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md p-4 w-full sm:w-64 border border-green-200 hover:shadow-lg transition"
    >
      <div className="flex items-center gap-2 mb-2">
        
        <h3 className="text-lg font-bold text-green-700">{name}</h3>
      </div>
      <p className="text-sm text-gray-600">Status: {status}</p>
      <p className="text-sm text-gray-600">Last Watered: {lastWatered}</p>
      <p className="text-sm text-gray-600">Stage: {stage}</p>
    </motion.div>
  );
}