import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoriqueData, fetchVaccinationData } from "../../api";
import Top from "../../components/CommonComponents/Top-bar";
import BarChart from "../../components/HistoryComponents/BarChart/";
import HbarChart from "../../components/HistoryComponents/HbarChart";
import PieChart from "../../components/HistoryComponents/PieChart";
import searchScreen from "../../img/search-screen.svg";
const Historique = () => {
  const dispatch = useDispatch();
  const { localisation, countryResearch } = useSelector(
    (state) => state.coviData
  );

  const position = countryResearch
    ? countryResearch
    : localisation
    ? localisation.country
    : null;
  useEffect(() => {
    fetchHistoriqueData(dispatch, position);
    fetchVaccinationData(dispatch, position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  return (
    <div className="History-global-container">
      <Top />
      {!countryResearch ? (
        <div className="No-data-history">
          <img src={searchScreen} alt="search" />
          <span>Select a country on the home page</span>
        </div>
      ) : (
        <div className="History-container">
          <BarChart />
          <div className="History-pie-container">
            <HbarChart />
            <PieChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Historique;
