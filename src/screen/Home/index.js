import React from "react";
import "./style.css";
import ReasearchBar from "../../components/ReasearchBar";
import CountryDisplay from "../../components/CountryDisplay";
import Map from "../../components/map";
import GlobalSituation from "../../components/GlobalSituation";
import { useSelector } from "react-redux";
const Home = ({ myMap }) => {
  const { countryResearch, localisation, covid19Data } =
    useSelector((state) => state.coviData);
  return (
    <div className="Home-container">
      <div className="Home-top-container">
        <div className="Top-left-content">
          <div className="Title-home-top-container">
            <div className="Title-home-top">
              Coronavirus today situation in{" "}
            </div>{" "}
            {covid19Data ? (
              covid19Data.map((covid) =>
                covid.country ===
                (countryResearch ? countryResearch : localisation.country) ? (
                  <div className="home-top-img-container">
                    <img
                      className="home-top-img"
                      src={covid.countryInfo.flag}
                      alt="flag"
                    />
                  </div>
                ) : null
              )
            ) : (
              <div>No data</div>
            )}
          </div>
          <div className="Top-right-content">
            <ReasearchBar />
          </div>
        </div>
      </div>
      <div className="Home-bottom-container">
        <div className="Display-data-container">
          <CountryDisplay />
          <Map myMap={myMap} />
        </div>
        <div className="Display-data-global-container">
          <GlobalSituation />
        </div>
      </div>
    </div>
  );
};

export default Home;
