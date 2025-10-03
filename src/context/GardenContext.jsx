import { createContext, useContext, useEffect, useState } from 'react';
import { fetchGardenData } from '../services/gardenService';

const GardenContext = createContext();

export function GardenProvider({ children }) {
  const [gardenData, setGardenData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGardenData()
      .then(setGardenData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <GardenContext.Provider value={{ gardenData, loading }}>
      {children}
    </GardenContext.Provider>
  );
}

export function useGardenData() {
  return useContext(GardenContext);
}