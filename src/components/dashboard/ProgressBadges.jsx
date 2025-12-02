import { motion } from "framer-motion";

export default function ProgressBadges({ badges }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-bold text-green-700 mb-3">Your Badges</h3>
      <div className="flex gap-4 flex-wrap">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-green-100 px-3 py-1 rounded-full text-sm font-semibold text-green-800 shadow-sm cursor-pointer"
          >
            🏅 {badge}
          </motion.div>
        ))}
      </div>
    </div>
  );
}