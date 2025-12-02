import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllSubscriptionsData } from "../services/pricingService";

export function usePricingData() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const data = await fetchAllSubscriptionsData();
        if (!data || data.length === 0) throw new Error("No plans found");
        setPlans(data);
      } catch (error) {
        console.error("Failed to load pricing plans:", error);
        navigate("/error");
      } finally {
        setLoading(false);
      }
    };

    loadPlans();
  }, [navigate]);

  return { plans, loading };
}