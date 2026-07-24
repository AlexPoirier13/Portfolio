import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  Title,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  Title
);

function paceToSeconds(value) {
  const minutes = Math.floor(value);
  const seconds = Math.round((value - minutes) * 100);
  return minutes * 60 + seconds;
}

function secondsToPace(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function RunningChart({ label, donnes }) {
  const donneesEnSecondes = donnes.map(paceToSeconds);

  // Calcul de la moyenne en secondes
  const moyenneSecondes =
    donneesEnSecondes.reduce((sum, val) => sum + val, 0) /
    donneesEnSecondes.length;

  // Ligne constante : même valeur répétée pour chaque point de l'axe X
  const ligneMoyenne = label.map(() => moyenneSecondes);

  const sub2pace = label.map(() => 340)

  const data = {
    labels: label,
    datasets: [
      {
        label: "Pace (min/km)",
        data: donneesEnSecondes,
        borderColor: "#60A5FA",
        backgroundColor: "rgba(96,165,250,0.15)",
        tension: 0.3,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: `Average (${secondsToPace(moyenneSecondes)})`,
        data: ligneMoyenne,
        borderColor: "#EF4444",
        borderWidth: 2,
        borderDash: [6, 6],
        pointRadius: 0,
        fill: false,
        tension: 0,
      },
      {
        label: `Sub 2h Pace (${secondsToPace(340)})`,
        data: sub2pace,
        borderColor: "#ffd700",
        borderWidth: 2,
        borderDash: [6, 6],
        pointRadius: 0,
        fill: false,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title:{
        display: true,
        text: "Evolution de l'allure en fonction du kilomètre parcouru",
        color: "white",
        font: {
          size: 16,
          weight: "bold",
        },
        padding:{
          top: 10,
          bottom: 20,
        },
      },
      legend: {
        labels: {
          color: "white",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label.split(" (")[0]}: ${secondsToPace(context.parsed.y)} /km`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Distance (km)",
          color: "white",
        },
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        reverse: true,
        title: {
          display: true,
          text: "Pace (min/km)",
          color: "white",
        },
        ticks: {
          color: "white",
          stepSize: 20,
          callback: function (value) {
            return secondsToPace(value);
          },
        },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default RunningChart;