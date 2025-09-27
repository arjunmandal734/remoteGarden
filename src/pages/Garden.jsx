<Link to={`/plant/${plant.id}`} className="text-blue-600 underline">View Details</Link>
import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockGarden = {
  Flower: [
    {
      id: '1',
      name: 'Rose Bush',
      health: 'Healthy',
      image: 'https://via.placeholder.com/150x100?text=Rose',
    },
  ],
  Vegetable: [
    {
      id: '2',
      name: 'Tomato Plant',
      health: 'Moderate',
      image: 'https://via.placeholder.com/150x100?text=Tomato',
    },
  ],
};

export default function Garden() {
  const [careStatus, setCareStatus] = useState({});

  const handleCare = (id, type) => {
    setCareStatus(prev => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [type]: true },
    }));
    alert(`${type} requested for plant ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Remote Garden 🌱</h1>

      {Object.keys(mockGarden).length === 0 ? (
        <p>No plants yet. Start planting!</p>
      ) : (
        Object.entries(mockGarden).map(([type, plants]) => (
          <div key={type} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{type}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {plants.map(plant => (
                <div key={plant.id} className="border p-4 rounded shadow bg-white">
                  <img src={plant.image} alt={plant.name} className="mb-2 rounded" />
                  <h3 className="text-lg font-bold">{plant.name}</h3>
                  <p className="text-sm text-gray-600">Health: {plant.health}</p>
                  <div className="mt-2 space-x-2">
                    <button
                      onClick={() => handleCare(plant.id, 'water')}
                      disabled={careStatus[plant.id]?.water}
                      className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
                    >
                      Water
                    </button>
                    <button
                      onClick={() => handleCare(plant.id, 'fertilize')}
                      disabled={careStatus[plant.id]?.fertilize}
                      className="bg-yellow-500 text-white px-3 py-1 rounded disabled:opacity-50"
                    >
                      Fertilize
                    </button>
                  </div>
                  <Link to={`/plant/${plant.id}`} className="block mt-3 text-green-600 underline text-sm">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
