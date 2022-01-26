import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loder";
import ReasearchBar from "../Top-bar/ReasearchBar";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
const Top = () => {
  const { countryResearch, covid19Data } = useSelector(
    (state) => state.coviData
  );
  return (
    <>
      <div
        className={
          !countryResearch
            ? "Home-top-container Home-top-none"
            : "Home-top-container"
        }
      >
        <div className="Top-left-content">
          <div
            className={
              !countryResearch
                ? "Title-home-top-container Title-none"
                : "Title-home-top-container"
            }
          >
            {!countryResearch ? null : (
              <>
                {covid19Data ? (
                  covid19Data.map((covid, i) =>
                    covid.country === countryResearch ? (
                      <div key={i} className="Title-home-top-content">
                        <div className="Title-home-top">
                          Coronavirus situation in{" "}
                        </div>{" "}
                        <div className="home-top-img-container">
                          <div className="home-top-img-content">
                            <img
                              className="home-top-img"
                              src={covid.countryInfo.flag}
                              alt="flag"
                            />
                            <div>{covid.country.substring(0, 11)}</div>
                          </div>
                        </div>
                      </div>
                    ) : null
                  )
                ) : (
                  <Loader />
                )}
              </>
            )}
          </div>
          <div
            className={
              !countryResearch
                ? "Top-right-content Title-none"
                : "Top-right-content"
            }
          >
            {!countryResearch ? null : <ReasearchBar />}
          </div>
          <div className="Top-contact-content">
            <div className="Top-contact">
              <a
                href="https://www.linkedin.com/in/nazimaitali/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="li" />
              </a>
              <a
                href="https://github.com/NazimAitali"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare className="git" />
              </a>

              <a
                href="https://twitter.com/NazimAitali"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare className="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
