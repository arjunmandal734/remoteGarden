import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";

const path = "/api/v1/plantprofile";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"}${path}`,
});

export const usePlantStore = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastKey, setLastKey] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Holds latest values to avoid stale closures
  const stateRef = useRef({
    loading: false,
    hasMore: true,
    lastKey: null,
  });

  useEffect(() => {
    stateRef.current = { loading, hasMore, lastKey };
  }, [loading, hasMore, lastKey]);

  const getPlantData = useCallback(async () => {
    const { loading: currentLoading, hasMore: currentHasMore, lastKey: currentLastKey } =
      stateRef.current;

    if (currentLoading || !currentHasMore) return;

    setLoading(true);

    try {
      const response = await api.get("/getlimited", {
       params: currentLastKey ? { startKey: currentLastKey } : {},
      });

      const newItems = response?.data?.data?.items || [];
      const newNextKey = response?.data?.data?.nextKey ?? null;

      setPlants((prev) => [...prev, ...newItems]);
      setLastKey(newNextKey);

      if (!newNextKey || newItems.length === 0) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to fetch plant data:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load initial data
  useEffect(() => {
    if (hasMore) getPlantData();
  }, [getPlantData, hasMore]);

  // Infinite scroll listener
  useEffect(() => {
    let timeoutId;

    const checkScroll = () => {
      const { loading: currentLoading, hasMore: currentHasMore } = stateRef.current;

      if (currentLoading || !currentHasMore) return;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150;

      if (nearBottom) {
        getPlantData();
      }
    };

    const debouncedHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScroll, 200);
    };

    window.addEventListener("scroll", debouncedHandler);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", debouncedHandler);
    };
  }, [getPlantData]);

  return { plants, loading, hasMore };
};
