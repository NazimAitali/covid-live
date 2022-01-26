import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bar, Line } from "react-chartjs-2";
import {
  continentDisplay,
  ShowVaccination,
  changeCharts,
  nextline,
  previousline,
  dataSets,
  options,
} from "../../../functions/ChartsFunction/ChartsFunction";
import { IoPeopleCircle } from "react-icons/io5";
import { RiSyringeFill, RiSyringeLine } from "react-icons/ri";
import {
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Loader from "../../../components/CommonComponents/Loder";
import Vachart from "./vaChart";
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
  const { ShowVarChart, ChangeChart, selectLines } = useSelector(
    (state) => state.uiOptions
  );
  /******************************************* */
  const timelineCases = historiqueData
    ? Object.values(historiqueData.timeline.cases)
    : null;
  const timelineRecovered = historiqueData
    ? Object.values(historiqueData.timeline.recovered)
    : null;
  const timelineDeaths = historiqueData
    ? Object.values(historiqueData.timeline.deaths)
    : null;

  const dataBar = {
    labels: timelineCases ? Object.keys(historiqueData.timeline.cases) : null,
    datasets: [
      dataSets(timelineCases, timelineRecovered, timelineDeaths)[0],
      dataSets(timelineCases, timelineRecovered, timelineDeaths)[1],
      dataSets(timelineCases, timelineRecovered, timelineDeaths)[2],
    ],
  };
  const dataLineCases = {
    labels: timelineCases ? Object.keys(historiqueData.timeline.cases) : null,
    datasets: [dataSets(timelineCases, timelineRecovered, timelineDeaths)[3]],
  };
  const dataLineRecovered = {
    labels: timelineCases ? Object.keys(historiqueData.timeline.cases) : null,
    datasets: [dataSets(timelineCases, timelineRecovered, timelineDeaths)[4]],
  };
  const dataLineDeaths = {
    labels: timelineCases ? Object.keys(historiqueData.timeline.cases) : null,
    datasets: [dataSets(timelineCases, timelineRecovered, timelineDeaths)[5]],
  };
  return (
    <div className="History-chart-container">
      <div className="History-details-container">
        <div className="Pop-container">
          {loadercovid ? (
            <Loader />
          ) : covid19Data ? (
            covid19Data.map((covid, i) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                <div className="Pop-content" key={i}>
                  {continentDisplay(covid.continent)}
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
            covid19Data.map((covid, i) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                <div className="Cont-content" key={i}>
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
                <RiSyringeLine
                  className="Syringe"
                  onClick={() => ShowVaccination(dispatch, ShowVarChart)}
                />
              ) : (
                <RiSyringeFill
                  className="Syringe-pulse"
                  onClick={() => ShowVaccination(dispatch, ShowVarChart)}
                />
              )}

              {Object.values(fetchVaccination.timeline)[9].toLocaleString("en")}
            </div>
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
      <div className="Chart-content">
        {ShowVarChart ? null : (
          <div className="btn-container">
            {ChangeChart ? (
              <button
                className="btn"
                onClick={() => changeCharts(dispatch, ChangeChart)}
              >
                <AiOutlineBarChart />
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => changeCharts(dispatch, ChangeChart)}
              >
                <AiOutlineLineChart />
              </button>
            )}
          </div>
        )}{" "}
        {!ShowVarChart ? (
          !ChangeChart ? null : (
            <>
              <div className="btn-container" style={{ left: "98%" }}>
                {selectLines < 3 ? (
                  <button
                    className="btn"
                    onClick={() => nextline(dispatch, selectLines)}
                  >
                    <AiOutlineArrowRight />
                  </button>
                ) : null}
              </div>
              <div className="btn-container" style={{ left: "92%" }}>
                {selectLines > 1 ? (
                  <button
                    className="btn"
                    onClick={() => previousline(dispatch, selectLines)}
                  >
                    <AiOutlineArrowLeft />
                  </button>
                ) : null}
              </div>
            </>
          )
        ) : null}
        {ShowVarChart ? (
          <Vachart />
        ) : ChangeChart ? (
          selectLines === 1 ? (
            <Line data={dataLineCases} options={options()[1]} />
          ) : selectLines === 2 ? (
            <Line data={dataLineRecovered} options={options()[1]} />
          ) : selectLines === 3 ? (
            <Line data={dataLineDeaths} options={options()[1]} />
          ) : null
        ) : (
          <Bar data={dataBar} options={options()[1]} />
        )}
      </div>
    </div>
  );
};

export default BarChart;
