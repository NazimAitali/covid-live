import React from "react";
import "./style.css";
import Loder from "../../img/Loder.png";
const Loader = () => {
  return (
    <div className="Loader-container">
      <img className="loader" src={Loder} alt="img" />
    </div>
  );
};

export default Loader;
