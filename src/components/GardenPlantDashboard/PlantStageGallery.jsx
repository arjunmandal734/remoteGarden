import { useState, useEffect } from "react";

export default function PlantStageGallery() {
  const [isLoading, setIsLoading] = useState(true);

  const stageImages = [
    { label: "Day 1", url: "/plantInages/plant7.png" },
    { label: "Day 3", url: "/plantInages/plant8.png" },
    { label: "Week 2", url: "/plantInages/plant9.png" },
    { label: "Month 1", url: "/plantInages/plant10.png" },
    { label: "Month 2", url: "/plantInages/plant11.png" },
    { label: "Month 3", url: "/plantInages/plant12.png" },
    { label: "Day 45", url: "/plantInages/plant7.png" },
    { label: "Day 55", url: "/plantInages/plant8.png" },
    { label: "Week 12", url: "/plantInages/plant9.png" },
    { label: "Month 6", url: "/plantInages/plant10.png" },
    { label: "Month 4", url: "/plantInages/plant11.png" },
    { label: "Month 46", url: "/plantInages/plant12.png" },
    { label: "Day 1", url: "/plantInages/plant7.png" },
    { label: "Day 3", url: "/plantInages/plant8.png" },
    { label: "Week 2", url: "/plantInages/plant9.png" },
    { label: "Month 1", url: "/plantInages/plant10.png" },
    { label: "Month 2", url: "/plantInages/plant11.png" },
    { label: "Month 3", url: "/plantInages/plant12.png" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-h-[400px] overflow-y-auto">
      <h2 className="text-lg font-semibold text-green-700 mb-4 text-center content-center">
        Growth Stage Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {isLoading
          ? Array.from({ length: stageImages.length }).map((_, index) => (
              <div
                key={index}
                className="w-full h-32 bg-gray-200 rounded-lg relative overflow-hidden animate-pulse"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-shimmer" />
              </div>
            ))
          : stageImages.map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:scale-[1.02] cursor-pointer transition"
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-32 object-cover"
                />
                <p className="text-xs text-center text-gray-600 py-1">
                  {img.label}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
