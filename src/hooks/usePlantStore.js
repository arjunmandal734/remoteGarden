import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";

const path = "/api/v1/plantprofile";
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}${path}`,
});

export const usePlantStore = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastKey, setLastKey] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const stateRef = useRef({ loading: false, hasMore: true });

  useEffect(() => {
    stateRef.current = { loading, hasMore };
  }, [loading, hasMore]);

  const getPlantData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await api.get("/getlimited", {
        params: lastKey ? { startKey: lastKey } : {},
      });

      const newItems = response.data.data.items || [];
      const newNextKey = response.data.data.nextKey ?? null;

      setPlants((prev) => [...prev, ...newItems]);
      setLastKey(newNextKey);

      if (newNextKey === null || newItems.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch plant data:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [lastKey, loading, hasMore]);

  useEffect(() => {
    getPlantData();
  }, [getPlantData]);

  useEffect(() => {
    let timeoutId;

    const scrollCallback = () => {
      const { loading: currentLoading, hasMore: currentHasMore } = stateRef.current;
      if (currentLoading || !currentHasMore) return;

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (nearBottom) {
        getPlantData();
      }
    };

    const debouncedScrollHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(scrollCallback, 200);
    };

    window.addEventListener("scroll", debouncedScrollHandler);
    return () => window.removeEventListener("scroll", debouncedScrollHandler);
  }, [getPlantData]);

  return { plants, loading, hasMore };
};