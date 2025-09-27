import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const mockPlants = {
  '1': {
    name: 'Rose Bush',
    type: 'Flower',
    growthStage: 'Blooming',
    health: 'Healthy',
    lastWatered: '2025-09-25',
    lastFertilized: '2025-09-20',
    image: 'https://via.placeholder.com/300x200?text=Rose+Bush',
  },
  '2': {
    name: 'Tomato Plant',
    type: 'Vegetable',
    growthStage: 'Fruit-bearing',
    health: 'Moderate',
    lastWatered: '2025-09-26',
    lastFertilized: '2025-09-18',
    image: 'https://via.placeholder.com/300x200?text=Tomato+Plant',
  },
};

export default function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const data = mockPlants[id];
    setPlant(data || null);
  }, [id]);

  if (!plant) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-600">Plant not found 🌱</h2>
        <Link to="/garden" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">Back to Garden</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{plant.name}</h1>
      <img src={plant.image} alt={plant.name} className="rounded shadow mb-4" />
      <ul className="space-y-2 text-gray-700">
        <li><strong>Type:</strong> {plant.type}</li>
        <li><strong>Growth Stage:</strong> {plant.growthStage}</li>
        <li><strong>Health:</strong> {plant.health}</li>
        <li><strong>Last Watered:</strong> {plant.lastWatered}</li>
        <li><strong>Last Fertilized:</strong> {plant.lastFertilized}</li>
      </ul>
      <Link to="/garden" className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded">Back to Garden</Link>
    </div>
  );
}
