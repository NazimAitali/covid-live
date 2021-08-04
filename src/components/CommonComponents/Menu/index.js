import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { FaHome, FaHistory } from "react-icons/fa";
import logo from "../../../img/coronavirus.png";
import { Link } from "react-router-dom";
import { SET_UI } from "../../../redux/actions/ui";
import { SET_COVID } from "../../../redux/actions/covid";
const Menu = () => {
  const dispatch = useDispatch();
  const { selectMenu } = useSelector((state) => state.uiOptions);

  const selectHome = () => {
    dispatch(
      {
        type: SET_UI,
        payload: {
          selectMenu: 1,
        },
      },
      dispatch({
        type: SET_COVID,
        payload: {
          countryResearch: false,
        },
      })
    );
  };
  const selectHistory = () => {
    dispatch(
      {
        type: SET_UI,
        payload: {
          selectMenu: 2,
        },
      },
      dispatch({
        type: SET_COVID,
        payload: {
          countryResearch: false,
        },
      })
    );
  };

  return (
    <div className="Menu-container">
      <nav className="Menu">
        <ul className="Liste">
          <li className="Logo-container">
            <img className="Logo" src={logo} alt="logo" />
          </li>
          <li className="Liste-btn">
            <Link to="/">
              <FaHome
                onClick={selectHome}
                className={
                  selectMenu === 1 ? "Menu-icone Menu-active" : "Menu-icone  "
                }
              />
            </Link>
          </li>
          <li className="Liste-btn">
            <Link to="/History">
              <FaHistory
                onClick={selectHistory}
                className={
                  selectMenu === 2 ? "Menu-icone Menu-active " : "Menu-icone  "
                }
              />
            </Link>
          </li>
        </ul>
        <div className="Mobile-menu">
          <div className="Bare">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
