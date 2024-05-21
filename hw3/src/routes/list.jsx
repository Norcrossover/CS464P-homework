import Root from "./root";
import Card from "../components/Card";
import FetchData from "../components/fetchDataFromAPI";
import numeral from "numeral";
import Chart from "chart.js/auto";

export default function List() {
  const { data } = FetchData();
  return (
    <div className="bg-slate-700 min-h-screen">
      <Root />
      <div className="p-4 flex flex-wrap justify-evenly gap-4">
        {data.map((country) => (
          <Card
            key={country.id}
            imgSrc={country.flag_png}
            imgAlt={country.flag_alt}
          >
            <h2 className="font-bold text-xl mb-2">
              {country.name || "Country name not available"}
            </h2>
            <div>
              <span className="font-semibold">Population:</span>{" "}
              <span>{numeral(country.population).format("0,0")}</span>
            </div>
            <div>
              <div className="font-semibold">
                Gross Domestic Product (billions):
              </div>{" "}
              <div className="inline-block">
                {country.gdp_billions
                  ? `$${numeral(country.gdp_billions).format("0,0")}`
                  : "GDP not available"}
              </div>
            </div>
            <h2 className="mt-2">Languages Spoken:</h2>
            <ul className="list-disc ml-5">
              {Array.isArray(country.official_languages) ? (
                country.official_languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))
              ) : (
                <li>Languages not available</li>
              )}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
