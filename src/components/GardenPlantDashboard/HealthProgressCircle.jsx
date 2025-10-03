import { motion } from "framer-motion";

export default function HealthProgressCircle({ label, percentage }) {
  const radius = 30;
  const stroke = 15;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center ">
      <svg width="100" height="100" className="hover:scale-[1.25]  transition duration-300">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#0000FF"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
        />
      </svg>
      <p className="text-sm mt-2 font-medium text-gray-700">
        {label}: {percentage}%
      </p>
    </div>
  );
}
