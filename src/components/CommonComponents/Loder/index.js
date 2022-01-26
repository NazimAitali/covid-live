import React from "react";
import { FaSearch } from "react-icons/fa";
const Loader = () => {
  return (
    <div className="loader-container">
      <span className="loader">
        <FaSearch />
      </span>
    </div>
  );
};

export default Loader;
