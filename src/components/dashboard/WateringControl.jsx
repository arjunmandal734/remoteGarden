import { motion } from "framer-motion";

export default function WateringControl({ onWater }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-green-50 rounded-xl p-4 shadow-md w-full sm:w-64"
    >
      <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">

        Remote Watering
      </h3>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onWater}
        className="w-full bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700 transition"
      >
        💦 Water Now
      </motion.button>
      <p className="text-xs text-gray-600 mt-2 text-center">Eco saved: 2L today 🌍</p>
    </motion.div>
  );
}