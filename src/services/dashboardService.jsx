import axios from 'axios';



export async function fetchDashboardData() {
  try {
    const response = await axios.get('/api/dashboard');
    return response.data; // expected to be { featured: [], newArrivals: [], bestSellers: [] }
  } catch (error) {
    console.error('Dashboard API error:', error);
    throw error;
  }
}