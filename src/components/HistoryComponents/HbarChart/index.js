import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
const HbarChart = () => {
  const { localisation, countryResearch, covid19Data } = useSelector(
    (state) => state.coviData
  );
  const dataCasesToday = covid19Data
    ? covid19Data.filter((el) =>
        countryResearch
          ? el.country === countryResearch
          : (localisation ? el.country === localisation.country : null) !== 1
      )
    : null;
  const dataHorizontal = {
    labels: ["Tests/OneMillion", "Cases/OneMillion", "Deaths/OneMillion"],
    datasets: [
      {
        label: "per/million",
        data: [
          dataCasesToday ? dataCasesToday[0].testsPerOneMillion : 1,
          dataCasesToday ? dataCasesToday[0].casesPerOneMillion : 1,
          dataCasesToday ? dataCasesToday[0].deathsPerOneMillion : 1,
        ],
        backgroundColor: ["#1eb264", "#ed765a", "#9E1030"],
        borderColor: ["whitesmoke"],
        borderWidth: 1,
      },
    ],
  };
  const optionsHorizontal = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "Per Million",
      },
    },
    animation: false,
  };
  return (
    <div className="History-bar-percent-content">
      {" "}
      <Bar data={dataHorizontal} options={optionsHorizontal} />
    </div>
  );
};

export default HbarChart;
