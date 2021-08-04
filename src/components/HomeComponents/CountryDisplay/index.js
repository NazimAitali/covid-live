import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from "react-redux";
import Loader from "../../CommonComponents/Loder";

const CountryDisplay = () => {
  const {
    localisation,
    covid19Data,
    covid19DataYesterday,
    countryResearch,
    loadercovid,
  } = useSelector((state) => state.coviData);
  return (
    <div className="Country-display">
      <div className="Box-display actif-box">
        <div className="Box-top-content">
          <div className="Box-top">
            {" "}
            <div>Infected</div>
            <div>
              <GoPrimitiveDot className={loadercovid ? "pulse" : "actif"} />
            </div>
          </div>
        </div>

        <div className="Box-bottom actif">
          {loadercovid ? (
            <Loader />
          ) : covid19Data ? (
            covid19Data.map((covid) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                covid.todayCases === 0 ? (
                  covid19DataYesterday ? (
                    covid19DataYesterday.map((yest) =>
                      yest.country ===
                      (countryResearch
                        ? countryResearch
                        : localisation.country) ? (
                        <div>
                          <div style={{ fontSize: ".2em" }}>Yesterday</div>
                          {yest.todayCases.toLocaleString("en")}
                        </div>
                      ) : null
                    )
                  ) : null
                ) : (
                  <div>{covid.todayCases.toLocaleString("en")}</div>
                )
              ) : null
            )
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
      <div className="Box-display recovered-box">
        <div className="Box-top-content">
          <div className="Box-top">
            {" "}
            <div>Recovered</div>
            <div>
              <GoPrimitiveDot className={loadercovid ? "pulse" : "recovered"} />
            </div>
          </div>
        </div>
        <div className="Box-bottom recovered">
          {loadercovid ? (
            <Loader />
          ) : covid19Data ? (
            covid19Data.map((covid) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                covid.todayRecovered === 0 ? (
                  covid19DataYesterday ? (
                    covid19DataYesterday.map((yest) =>
                      yest.country ===
                      (countryResearch
                        ? countryResearch
                        : localisation.country) ? (
                        <div>
                          {" "}
                          <div style={{ fontSize: ".2em" }}>Yesterday</div>
                          {yest.todayRecovered.toLocaleString("en")}
                        </div>
                      ) : null
                    )
                  ) : null
                ) : (
                  <div>{covid.todayRecovered.toLocaleString("en")}</div>
                )
              ) : null
            )
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
      <div className="Box-display death-box">
        <div className="Box-top-content">
          <div className="Box-top">
            {" "}
            <div>Death</div>
            <div>
              <GoPrimitiveDot className={loadercovid ? "pulse" : "death"} />
            </div>
          </div>
        </div>
        <div className="Box-bottom death">
          {loadercovid ? (
            <Loader />
          ) : covid19Data ? (
            covid19Data.map((covid) =>
              covid.country ===
              (countryResearch ? countryResearch : localisation.country) ? (
                covid.todayDeaths === 0 ? (
                  covid19DataYesterday ? (
                    covid19DataYesterday.map((yest) =>
                      yest.country ===
                      (countryResearch
                        ? countryResearch
                        : localisation.country) ? (
                        <div>
                          <div style={{ fontSize: ".2em" }}>Yesterday</div>
                          {yest.todayDeaths.toLocaleString("en")}
                        </div>
                      ) : null
                    )
                  ) : null
                ) : (
                  <div>{covid.todayDeaths.toLocaleString("en")}</div>
                )
              ) : null
            )
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDisplay;
