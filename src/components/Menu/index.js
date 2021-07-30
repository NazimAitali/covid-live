import React from "react";
import "./style.css";
import { FaHome, FaHistory } from "react-icons/fa";
import logo from "../../img/coronavirus.png";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="Menu-container">
      <nav className="Menu">
        <ul className="Liste">
          <li className="Logo-container">
            <img className="Logo" src={logo} alt="logo" />
          </li>
          <li>
            <Link to="/">
              <FaHome className="Menu-icone" />
            </Link>
          </li>
          <li>
            <Link to="/History">
              <FaHistory className="Menu-icone" />
            </Link>
          </li>
        </ul>
        <div className="Mode-container">
          <div>mode</div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
