import axios from "axios";

const path = "/api/v1/plantprofile";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}${path}`,
});

 const fetchPlantProfiles = async (params) => {
  try {
    const response = await api.get("/getlimited",{params});
    return response.data.data;
  } catch (error) {
    console.error("Plant store API error:", error);
  }
};

export default fetchPlantProfiles;