import { useState, useEffect, useMemo } from "react";
import Papa from "papaparse";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import runsCsv from "../assets/overall.csv?url";

ChartJS.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend, Title);

const MOIS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function parseDistance(str) {
  return parseFloat(str.replace(",", ".")); 
}

function parseDateFR(str) {
  const [day, month, year] = str.split("/").map(Number);
  return { day, month: month - 1, year };
}

function MonthlyDistanceChart() {
  const [rows, setRows] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    fetch(runsCsv)
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
        setRows(parsed.data);
      });
  }, []);

  const years = useMemo(() => {
    const set = new Set(rows.map((r) => r.Date && parseDateFR(r.Date).year).filter(Boolean));
    return [...set].sort((a, b) => b - a);
  }, [rows]);

  useEffect(() => {
    if (years.length && selectedYear === null) setSelectedYear(years[0]);
  }, [years, selectedYear]);

  const distancesByMonth = useMemo(() => {
    const totals = Array(12).fill(0);
    rows.forEach((r) => {
      if (!r.Date || !r.Distance) return;
      const { month, year } = parseDateFR(r.Date);
      if (year === selectedYear) totals[month] += parseDistance(r.Distance);
    });
    return totals.map((v) => Math.round(v * 100) / 100);
  }, [rows, selectedYear]);

  const data = {
    labels: MOIS,
    datasets: [
      {
        label: `Distance (km) - ${selectedYear ?? ""}`,
        data: distancesByMonth,
        backgroundColor: "#60A5FA",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Kilomètres parcourus par mois",
        color: "white",
        font: { size: 16, weight: "bold" },
        padding: { top: 10, bottom: 20 },
      },
      legend: { labels: { color: "white" } },
      tooltip: { callbacks: { label: (ctx) => `${ctx.parsed.y} km` } },
    },
    scales: {
      x: { ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.05)" } },
      y: { beginAtZero: true, ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.05)" } },
    },
  };

  return (
    <div className="chart_container">
      <div className="chart_header">
        <select
          className="year_select"
          value={selectedYear ?? ""}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div className="chart_wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
);
}

export default MonthlyDistanceChart;