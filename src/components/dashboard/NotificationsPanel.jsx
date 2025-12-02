import { motion } from "framer-motion";

export default function NotificationsPanel({ notifications }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-4 shadow-md"
    >
      <h3 className="text-lg font-bold text-green-700 mb-3">Notifications</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {notifications.map((note, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-2"
          >
            <span className="text-green-500">🔔</span>
            <span>{note}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}