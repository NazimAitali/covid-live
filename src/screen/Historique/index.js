import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getHistoriqueData, fetchVaccination } from "../../api";
import Top from "../../components/CommonComponents/Top-bar";
import BarChart from "../../components/HistoryComponents/BarChart/";
import HbarChart from "../../components/HistoryComponents/HbarChart";
import PieChart from "../../components/HistoryComponents/PieChart";

const Historique = () => {
  const dispatch = useDispatch();
  const { historiqueData, localisation, countryResearch } = useSelector(
    (state) => state.coviData
  );

  const position = countryResearch
    ? countryResearch
    : localisation
    ? localisation.country
    : null;
  useEffect(() => {
    getHistoriqueData(dispatch, position);
    fetchVaccination(dispatch, position);
  }, [position]);
  console.log(
    historiqueData
      ? Object.values(historiqueData.timeline.cases).slice(20)
      : null
  );

  return (
    <div className="History-global-container">
      <Top />
      <div className="History-container">
        <BarChart />
        <div className="History-pie-container">
          <HbarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Historique;
