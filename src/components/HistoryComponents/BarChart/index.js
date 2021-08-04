import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bar, Line } from "react-chartjs-2";
import {
  GiEarthAfricaEurope,
  GiEarthAmerica,
  GiEarthAsiaOceania,
} from "react-icons/gi";
import { IoPeopleCircle } from "react-icons/io5";
import { RiSyringeFill, RiSyringeLine } from "react-icons/ri";
import { AiOutlineBarChart, AiOutlineLineChart } from "react-icons/ai";
import Loader from "../../../components/CommonComponents/Loder";
import Vachart from "./vaChart";
import { SET_UI } from "../../../redux/actions/ui";
const BarChart = () => {
  const dispatch = useDispatch();
  const {
    historiqueData,
    localisation,
    countryResearch,
    loadercovid,
    covid19Data,
    fetchVaccination,
  } = useSelector((state) => state.coviData);
  const { ShowVarChart, ChangeChart } = useSelector((state) => state.uiOptions);
  console.log(
    historiqueData ? Object.keys(historiqueData.timeline.cases) : null
  );
  /******************************************* */
  const dataFirstBar = {
    label: "Total Infected",
    data: historiqueData ? Object.values(historiqueData.timeline.cases) : null,
    backgroundColor: "#041C37",
  };
  const dataSecondBar = {
    label: "Total Recovered",
    data: historiqueData
      ? Object.values(historiqueData.timeline.recovered)
      : null,
    backgroundColor: "#05461F",
  };
  const dataThredBar = {
    label: "Total Deaths",
    data: historiqueData ? Object.values(historiqueData.timeline.deaths) : null,
    backgroundColor: "#460505",
  };

  const dataBar = {
    labels: historiqueData ? Object.keys(historiqueData.timeline.cases) : null,
    datasets: [dataFirstBar, dataSecondBar, dataThredBar],
  };

  const optionsBar = {
    animation: false,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  /******************************************* */
  const dataFirstLine = {
    label: "Total Infected",
    data: historiqueData ? Object.values(historiqueData.timeline.cases) : null,
    lineTension: 0,
    fill: false,
    borderColor: "red",
    yAxisID: "A",
  };
  const dataSecondLine = {
    label: "Total Recovered",
    data: historiqueData
      ? Object.values(historiqueData.timeline.recovered)
      : null,
    lineTension: 0,
    fill: false,
    borderColor: "blue",
    yAxisID: "B",
  };
  const dataThredLine = {
    label: "Total Deaths",
    data: historiqueData ? Object.values(historiqueData.timeline.deaths) : null,
    lineTension: 0,
    fill: false,
    borderColor: "green",
    yAxisID: "C",
  };
  const dataLine = {
    labels: historiqueData ? Object.keys(historiqueData.timeline.cases) : null,
    datasets: [dataFirstLine, dataSecondLine, dataThredLine],
  };
  const optionsLine = {
    animation: false,
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 80,
        fontColor: "black",
      },
    },
    scales: {
      A: {
        type: "linear",
        display: true,
        position: "left",
      },
      B: {
        type: "linear",
        display: true,
        position: "left",
      },
      C: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const continent = (covid) => {
    switch (true) {
      case covid === "Africa" || covid === "Europe":
        return <GiEarthAfricaEurope />;
      case covid === "Asia" || covid === "Australia-Oceania":
        return <GiEarthAsiaOceania />;
      case covid === "North America" || covid === "South America":
        return <GiEarthAmerica />;
      default:
        break;
    }
  };
  const ShowVac = () => {
    dispatch({
      type: SET_UI,
      payload: {
        ShowVarChart: ShowVarChart ? false : true,
      },
    });
  };

  const changeCharts = () => {
    dispatch({
      type: SET_UI,
      payload: {
        ChangeChart: ChangeChart ? false : true,
      },
    });
  };
  return (
    <div className="History-chart-container">
      <div className="History-details-container">
        <div className="Pop-container">
          {loadercovid ? (
            <Loader />
          ) : covid19Data ? (
            covid19Data.map((covid) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                <div className="Pop-content">
                  {continent(covid.continent)}
                  {covid.continent}{" "}
                </div>
              ) : null
            )
          ) : (
            <div>No data</div>
          )}
        </div>
        <div className="Cont-container">
          {loadercovid ? (
            <Loader />
          ) : covid19Data ? (
            covid19Data.map((covid) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                <div className="Cont-content">
                  <IoPeopleCircle />
                  {covid.population.toLocaleString("en")}
                </div>
              ) : null
            )
          ) : (
            <div>No data</div>
          )}
        </div>
        <div className="Vac-container">
          {loadercovid ? (
            <Loader />
          ) : fetchVaccination ? (
            <div className="Vac-content">
              {ShowVarChart ? (
                <RiSyringeLine className="Syringe" onClick={ShowVac} />
              ) : (
                <RiSyringeFill className="Syringe-pulse" onClick={ShowVac} />
              )}

              {Object.values(fetchVaccination.timeline)[9].toLocaleString("en")}
            </div>
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
      <div className="Chart-content">
        <div className="btn-container">
          {ChangeChart ? (
            <button className="btn" onClick={changeCharts}>
              <AiOutlineBarChart />
            </button>
          ) : (
            <button className="btn" onClick={changeCharts}>
              <AiOutlineLineChart />
            </button>
          )}
        </div>
        {ShowVarChart ? (
          <Vachart />
        ) : ChangeChart ? (
          <Line data={dataLine} options={optionsLine} />
        ) : (
          <Bar data={dataBar} options={optionsBar} />
        )}
      </div>
    </div>
  );
};

export default BarChart;
