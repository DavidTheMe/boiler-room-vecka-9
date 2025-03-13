// Måste köra npm install chart.js react-chartjs-2 för att kunna använda denna

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import songsData from '../../../public/songs.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ShowStatistics: React.FC = () => {
  const statistics = songsData.statistics;

  const data = {
    labels: Object.keys(statistics),
    datasets: [
      {
        label: 'Streams',
        data: Object.values(statistics),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Song Streams Statistics',
      },
    },
  };

  return (
    <div>
      <h2>Song Streams Statistics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ShowStatistics;