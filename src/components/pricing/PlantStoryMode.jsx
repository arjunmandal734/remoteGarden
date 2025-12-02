import { motion } from "framer-motion";

const storyEvents = [
  { title: "Planted", date: "Sep 1, 2025" },
  { title: "Watered", date: "Sep 3, 2025", mood: "Stressed" },
  { title: "Fertilized", date: "Sep 10, 2025" },
  { title: "Bloomed", date: "Oct 1, 2025" }
];

export default function PlantStoryMode() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-bold text-green-700 mb-4">Plant Story</h2>
      <ul className="space-y-4">
        {storyEvents.map((event, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="text-green-500 text-lg">🌱</span>
            <div>
              <p className="font-semibold text-gray-800">{event.title}</p>
              <p className="text-sm text-gray-500">{event.date}</p>
              {event.mood && (
                <p className="text-xs text-blue-500 italic">Mood: {event.mood}</p>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}