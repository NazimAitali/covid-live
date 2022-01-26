import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from "react-redux";
import Loader from "../../CommonComponents/Loder";
import noData from "../../../img/nodata.png";
import ReasearchBar from "../../CommonComponents/Top-bar/ReasearchBar";
const CountryDisplay = () => {
  const { covid19Data, covid19DataYesterday, countryResearch, loadercovid } =
    useSelector((state) => state.coviData);
  return (
    <>
      {countryResearch ? (
        <div
          className={
            !countryResearch ? "Country-display" : "Country-display Top"
          }
        >
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
                covid19Data.map((covid, i) =>
                  covid.country === countryResearch ? (
                    covid.todayCases === 0 ? (
                      covid19DataYesterday ? (
                        covid19DataYesterday.map((yest, index) =>
                          yest.country === countryResearch ? (
                            <div key={index}>
                              <div className="Box-period">Yesterday</div>
                              {yest.todayCases.toLocaleString("en")}
                            </div>
                          ) : null
                        )
                      ) : null
                    ) : (
                      <div key={i}>
                        <div className="Box-period">Today</div>
                        {covid.todayCases.toLocaleString("en")}
                      </div>
                    )
                  ) : null
                )
              ) : (
                <div className="No-data">
                  <img src={noData} alt="no-data" />
                </div>
              )}
            </div>
          </div>
          <div className="Box-display recovered-box">
            <div className="Box-top-content">
              <div className="Box-top">
                {" "}
                <div>Recovered</div>
                <div>
                  <GoPrimitiveDot
                    className={loadercovid ? "pulse" : "recovered"}
                  />
                </div>
              </div>
            </div>
            <div className="Box-bottom recovered">
              {loadercovid ? (
                <Loader />
              ) : covid19Data ? (
                covid19Data.map((covid, i) =>
                  covid.country === countryResearch ? (
                    covid.todayRecovered === 0 ? (
                      covid19DataYesterday ? (
                        covid19DataYesterday.map((yest, index) =>
                          yest.country === countryResearch ? (
                            <div key={index}>
                              {" "}
                              <div className="Box-period">Yesterday</div>
                              {yest.todayRecovered.toLocaleString("en")}
                            </div>
                          ) : null
                        )
                      ) : null
                    ) : (
                      <div key={i}>
                        <div className="Box-period">Today</div>
                        {covid.todayRecovered.toLocaleString("en")}
                      </div>
                    )
                  ) : null
                )
              ) : (
                <div className="No-data">
                  <img src={noData} alt="no-data" />
                </div>
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
                covid19Data.map((covid, i) =>
                  covid.country === countryResearch ? (
                    covid.todayDeaths === 0 ? (
                      covid19DataYesterday ? (
                        covid19DataYesterday.map((yest, index) =>
                          yest.country === countryResearch ? (
                            <div key={index}>
                              <div className="Box-period">Yesterday</div>
                              {yest.todayDeaths.toLocaleString("en")}
                            </div>
                          ) : null
                        )
                      ) : null
                    ) : (
                      <div key={i}>
                        {" "}
                        <div className="Box-period">Today</div>
                        {covid.todayDeaths.toLocaleString("en")}
                      </div>
                    )
                  ) : null
                )
              ) : (
                <div className="No-data">
                  <img src={noData} alt="no-data" />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="Country-display">
          <div className="Global-research-container">
            <div className="Select-title">Select Country</div>
            <div className="Select-global">
              <ReasearchBar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDisplay;
