import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  dataSets,
  options,
} from "../../../functions/ChartsFunction/ChartsFunction";
const HbarChart = () => {
  const { localisation, countryResearch, covid19Data } = useSelector(
    (state) => state.coviData
  );

  const data = {
    labels: ["Tests/OneMillion", "Cases/OneMillion", "Deaths/OneMillion"],
    datasets: [
      dataSets(
        null,
        null,
        null,
        null,
        covid19Data,
        null,
        countryResearch,
        localisation
      )[7],
    ],
  };
  return (
    <div className="History-bar-percent-content">
      {" "}
      <Bar data={data} options={options()[2]} />
    </div>
  );
};

export default HbarChart;
