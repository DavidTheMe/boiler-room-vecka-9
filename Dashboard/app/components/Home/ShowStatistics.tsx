// ShowStatistics.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ShowStatistics: React.FC = () => {
 
  const statistics = {
    "Blinding Lights": 183,
    "Save your Tears": 210,
    "Levitating": 132,
    "Peaches": 97,
    "Watermelon Sugar": 145,
    "Circles": 168,
  };

  const data = {
    labels: Object.keys(statistics),
    datasets: [
      {
        label: "Antal lyssningar",
        data: Object.values(statistics),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Mest spelade låtar denna vecka",
      },
    },
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Statistik</h2>
      <div className="card shadow-md rounded-lg p-6">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ShowStatistics;
