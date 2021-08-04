import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

const Vachart = () => {
  const { fetchVaccination } = useSelector((state) => state.coviData);

  const options = {
    animation: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const data = {
    labels: Object.keys(fetchVaccination.timeline),
    datasets: [
      {
        label: "Nombre total de doses administrées",
        data: Object.values(fetchVaccination.timeline),
        fill: false,
        backgroundColor: "#00BB57",
        borderColor: "#00441B",
      },
    ],
  };
  return (
    <>
      {" "}
      <Line data={data} options={options} />
    </>
  );
};

export default Vachart;
