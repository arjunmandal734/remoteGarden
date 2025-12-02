import { useEffect, useState } from "react";

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const step = Math.ceil(end / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 60);
    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
}

export default function ImpactTracker({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-xl font-bold text-green-700 mb-4">🌿 Impact Tracker</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
        <div>
          <div className="text-green-600 text-lg font-semibold">
            <AnimatedCounter value={data.co2} /> kg
          </div>
          <p>CO₂ Absorbed</p>
        </div>
        <div>
          <div className="text-green-600 text-lg font-semibold">
            <AnimatedCounter value={data.water} /> L
          </div>
          <p>Water Saved</p>
        </div>
        <div>
          <div className="text-green-600 text-lg font-semibold">
            <AnimatedCounter value={data.species} />
          </div>
          <p>Biodiversity Supported</p>
        </div>
      </div>
    </div>
  );
}