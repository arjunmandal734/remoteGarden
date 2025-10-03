import { createContext, useContext, useEffect, useState } from "react";
import { fetchPricingPlans } from "../services/pricingService";

const PricingContext = createContext();

export function PricingProvider({ children }) {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlans() {
      try {
        const data = await fetchPricingPlans();
        setPlans(data);
      } catch (error) {
        console.error("Failed to load pricing plans:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPlans();
  }, []);

  return (
    <PricingContext.Provider value={{ plans, loading }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricingData() {
  return useContext(PricingContext);
}