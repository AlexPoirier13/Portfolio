import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

function RunningChart() {
  const data = {
    labels: [
      "24/07/25","31/07/25","06/08/25","07/09/25","14/09/25",
      "21/09/25","28/09/25","05/10/25","12/10/25","26/10/25",
      "11/11/25","16/11/25","30/11/25","14/12/25","21/12/25",
      "26/12/25","03/01/26","11/01/26","18/01/26","02/02/26",
      "20/02/26"
    ],
    datasets: [
      {
        label: "Average Pace (min/km)",
        data: [
          7.12,7.01,6.36,6.49,7.03,6.15,6.26,6.07,
          5.58,5.58,6.07,6.00,5.48,5.54,5.54,5.37,
          5.52,5.52,5.53,6.08,5.51,
        ],
        borderColor: "#60A5FA",
        backgroundColor: "rgba(96,165,250,0.15)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        reverse: true,
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default RunningChart;