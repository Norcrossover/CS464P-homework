import Root from "./root";
import { Bar } from "react-chartjs-2";
import FetchData from "../components/fetchDataFromAPI";
import Chart from "chart.js/auto";

export default function Population() {
  const { data } = FetchData();
  const slate100 = "#F1F5F9";

  const countriesList = data.map(
    (country) => country.name || "Country name not available",
  );

  const populationList = data.map((country) => country.population || 0);

  const chartData = {
    labels: countriesList,
    datasets: [
      {
        label: "Population",
        data: populationList,
        backgroundColor: "rgba(6, 182, 212, 1)",
      },
    ],
  };

  const chartTitle = "Population of the countries in South America";

  return (
    <div className="flex flex-col items-center bg-slate-700 min-h-screen">
      <Root />
      <Bar
        data={chartData}
        key={Date.now()}
        options={{
          plugins: {
            title: {
              display: true,
              text: chartTitle,
              font: {
                size: 30,
                color: slate100,
              },
              color: slate100,
            },
            legend: {
              labels: {
                color: slate100,
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: slate100,
              },
            },
            y: {
              ticks: {
                color: slate100,
              },
              grid: {
                color: slate100,
              },
            },
          },
        }}
      />
    </div>
  );
}
