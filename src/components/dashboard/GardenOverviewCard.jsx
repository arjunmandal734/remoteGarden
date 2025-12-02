import StatCard from "./StatCard";
import { motion } from "framer-motion";

export default function GardenOverviewCard({ growthProgress }) {
  const stats = [
    { title: "Snake Plant", number: 12, adjective: "Thriving", icon: "🌿" },
    { title: "Peace Lily", number: 8, adjective: "Blooming", icon: "🌸" },
    { title: "Red Lily", number: 5, adjective: "Healthy", icon: "🍃" },
    { title: "Oriza Sat", number: 3, adjective: "Sprouting", icon: "🌱" },
  ];

  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-4 py-10 text-gray-800 bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-xl shadow-sm"
      >
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-green-800">
            🌿 Welcome to Your Remote Garden
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
            Watch your plants grow from anywhere. We handle the care—you enjoy
            the growth!
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Growth Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <p className="text-sm font-medium text-gray-600 mb-2">
            Overall Growth Progress
          </p>
          <div className="relative w-full max-w-xl mx-auto h-4 bg-green-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${growthProgress}%` }}
              transition={{ duration: 1.2 }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full"
            />
          </div>
          <p className="text-xs text-green-700 mt-2">{growthProgress}%</p>
        </motion.div>
      </motion.section>
    </div>
  );
}
