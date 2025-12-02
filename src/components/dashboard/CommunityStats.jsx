import { motion } from "framer-motion";

export default function CommunityStats({ treesPlanted, co2Absorbed }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-4 shadow-md text-center"
    >
      <h3 className="text-lg font-bold text-green-700 mb-3">🌍 Community Impact</h3>
      <p className="text-sm text-gray-700">🌳 Trees Planted: <span className="font-semibold">{treesPlanted}</span></p>
      <p className="text-sm text-gray-700">🫁 CO₂ Absorbed: <span className="font-semibold">{co2Absorbed} kg</span></p>
    </motion.div>
  );
}