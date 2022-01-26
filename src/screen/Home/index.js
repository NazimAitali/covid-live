import React from "react";
import CountryDisplay from "../../components/HomeComponents/CountryDisplay";
import Map from "../../components/HomeComponents/Map";
import GlobalSituation from "../../components/HomeComponents/GlobalSituation";
import Top from "../../components/CommonComponents/Top-bar";

const Home = () => {
  return (
    <div className="Home-container">
      <Top />
      <div className="Home-bottom-container">
        <div className="Display-data-container">
          <CountryDisplay />
          <Map />
        </div>
        <div className="Display-data-global-container">
          <GlobalSituation />
        </div>
      </div>
    </div>
  );
};

export default Home;
