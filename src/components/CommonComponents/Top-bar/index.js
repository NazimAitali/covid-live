import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import Loader from "../Loder";
import ReasearchBar from "../Top-bar/ReasearchBar";
const Top = () => {
  const { countryResearch, localisation, covid19Data } = useSelector(
    (state) => state.coviData
  );
  return (
    <div className="Home-top-container">
      <div className="Top-left-content">
        <div className="Title-home-top-container">
          {covid19Data ? (
            covid19Data.map((covid, i) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                <>
                  <div className="Title-home-top">
                    Coronavirus today situation in{" "}
                  </div>{" "}
                  <div key={i} className="home-top-img-container">
                    <img
                      className="home-top-img"
                      src={covid.countryInfo.flag}
                      alt="flag"
                    />
                    &nbsp;
                    <div>{covid.country.substring(0, 11)}</div>
                  </div>
                </>
              ) : null
            )
          ) : (
            <Loader />
          )}
        </div>
        <div className="Top-right-content">
          <ReasearchBar />
        </div>
      </div>
    </div>
  );
};

export default Top;
