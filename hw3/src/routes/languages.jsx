import Root from "./root";
import FetchData from "../components/fetchDataFromAPI";
import { Doughnut } from "react-chartjs-2";

export default function Languages() {
  const { data } = FetchData();
  const slate100 = "#F1F5F9";

  let languageCounts = {};
  data.forEach((country) => {
    if (country.official_languages) {
      country.official_languages.forEach((language) => {
        if (languageCounts[language]) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      });
    }
  });

  const chartData = {
    labels: Object.keys(languageCounts),
    datasets: [
      {
        label: "Language",
        data: Object.values(languageCounts),
      },
    ],
  };

  return (
    <div className="flex flex-col bg-slate-700 min-h-screen">
      <Root />
      <Doughnut
        data={chartData}
        key={Date.now()}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Languages",
              font: {
                size: 30,
              },
              color: slate100,
            },
            legend: {
              labels: {
                color: slate100,
              },
            },
          },
        }}
      />
    </div>
  );
}
