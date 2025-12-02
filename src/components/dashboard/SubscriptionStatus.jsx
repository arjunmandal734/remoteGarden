import { motion } from "framer-motion";

export default function SubscriptionStatus({ plan, renewalDate }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-green-50 rounded-xl p-4 shadow-md text-center"
    >
      <h3 className="text-lg font-bold text-green-700 mb-2">📦 Subscription</h3>
      <p className="text-sm text-gray-700">Plan: <span className="font-semibold">{plan}</span></p>
      <p className="text-sm text-gray-700">Renews on: <span className="italic">{renewalDate}</span></p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition"
      >
        Upgrade Plan
      </motion.button>
    </motion.div>
  );
}