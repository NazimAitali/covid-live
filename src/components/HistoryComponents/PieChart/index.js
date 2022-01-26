import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  dataSets,
  options,
} from "../../../functions/ChartsFunction/ChartsFunction";
const PieChart = () => {
  const { localisation, countryResearch, covid19Data, covid19DataYesterday } =
    useSelector((state) => state.coviData);
  const dataDonut = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      dataSets(
        null,
        null,
        null,
        null,
        covid19Data,
        covid19DataYesterday,
        countryResearch,
        localisation
      )[8],
    ],
  };

  return (
    <div className="History-pie-content">
      <Pie data={dataDonut} options={options()[3]} />
    </div>
  );
};

export default PieChart;
