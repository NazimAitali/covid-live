import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  options,
  dataSets,
} from "../../../functions/ChartsFunction/ChartsFunction";

const Vachart = () => {
  const { fetchVaccination } = useSelector((state) => state.coviData);

  const data = {
    labels: Object.keys(fetchVaccination.timeline),
    datasets: [
      dataSets(null, null, null, Object.values(fetchVaccination.timeline))[6],
    ],
  };
  return (
    <>
      {" "}
      <Line data={data} options={options()[1]} />
      <a className="Src-vaccination" href="https://covid.ourworldindata.org">
        Sourced from https://covid.ourworldindata.org
      </a>
    </>
  );
};

export default Vachart;
