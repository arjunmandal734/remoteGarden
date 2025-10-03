import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
Chart.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function GrowthChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Growth Progress",
        data: data.map((d) => d.height),
        borderColor: "#10b981",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-bold text-green-700 mb-2">📈 Plant Growth Over Time</h3>
      <Line data={chartData} />
    </div>
  );
}