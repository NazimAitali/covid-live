import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHome, FaChartBar } from "react-icons/fa";
import logo from "../../../img/coronavirus.png";
import { NavLink } from "react-router-dom";
import { SET_UI } from "../../../redux/actions/ui";
import { SET_COVID } from "../../../redux/actions/covid";
const Menu = () => {
  const dispatch = useDispatch();
  const { mobileMenu } = useSelector((state) => state.uiOptions);
  const { covid19Data, countryResearch } = useSelector(
    (state) => state.coviData
  );
  const closeMenu = () => {
    dispatch(
      {
        type: SET_UI,
        payload: {
          mobileMenu: "-51%",
        },
      },
      dispatch({
        type: SET_COVID,
        payload: {},
      })
    );
  };
  const openMenu = () => {
    dispatch({
      type: SET_UI,
      payload: {
        mobileMenu: mobileMenu === "4%" ? "-51%" : "4%",
      },
    });
  };
  return (
    <div className="Menu-container">
      <nav className="Menu">
        <ul className="Liste">
          <li className="Logo-container">
            <img
              className={covid19Data ? "Logo" : "Logo-spine"}
              src={logo}
              alt="logo"
            />
          </li>
          <li className="Liste-btn" onClick={closeMenu}>
            <NavLink
              to="/"
              exact
              className="Menu-list"
              activeClassName="Menu-active"
            >
              <FaHome />
            </NavLink>
          </li>

          <li className="Liste-btn" onClick={closeMenu}>
            <NavLink
              to="/History"
              className={!countryResearch ? "disable" : "Menu-list"}
              activeClassName="Menu-active"
            >
              <FaChartBar />
            </NavLink>
          </li>
        </ul>
        <div className="Mobile-menu">
          <input type="checkbox" className="menu-checkbox" />
          <div className="menu-humb" onClick={openMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className="mobile-menu-content" style={{ right: mobileMenu }}>
            <li className="mobile-list" onClick={closeMenu}>
              <NavLink
                to="/"
                exact
                className="Menu-list"
                activeClassName="Mobile-active"
              >
                <FaHome />
              </NavLink>
            </li>
            <li className="mobile-list" onClick={closeMenu}>
              <NavLink
                to="/History"
                className={!countryResearch ? "disable" : "Menu-list"}
                activeClassName="Mobile-active"
              >
                <FaChartBar />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
