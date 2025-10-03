// services/gardenService.js

export async function fetchGardenData() {
  // Simulated async fetch (replace with real API call if needed)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        overview: {
          totalPlants: 15,
          growthProgress: 72,
          notifications: "2 plants need watering",
        },
        plants: [
          {
            plantId: "PL001",
            name: "Snake Plant",
            scientificName: "Sansevieria trifasciata",
            imageUrl: "../../../plantImages/plant1.png",
            plantationDate: "2025-07-12",
            lastWatered: "2025-09-28",
            lastFertilized: "2025-09-20",
          },
          {
            plantId: "PL002",
            name: "Peace Lily",
            scientificName: "Spathiphyllum wallisii",
            imageUrl: "../../../plantImages/plant2.png",
            plantationDate: "2025-06-05",
            lastWatered: "2025-09-27",
            lastFertilized: "2025-09-18",
          },
          // Add more plants as needed
        ],
      });
    }, 1000); // Simulate network delay
  });
}