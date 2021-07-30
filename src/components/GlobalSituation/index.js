import React from "react";
import "./style.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { SET_COVID } from "../../redux/actions/covid";
import { useDispatch, useSelector } from "react-redux";
import { displayList, sort } from "../../functions/displayListe";

const GlobalSituation = () => {
  const { covid19Data, listDisplay, sortDisplay } = useSelector(
    (state) => state.coviData
  );
  const dispatch = useDispatch();
  const onChangeDisplay = (e) => {
    dispatch({
      type: SET_COVID,
      payload: {
        listDisplay: e.target.value,
      },
    });
  };
  const onChangeSort = (e) => {
    dispatch({
      type: SET_COVID,
      payload: {
        sortDisplay: e.target.value,
      },
    });
  };
  return (
    <div className="Display-data-global-content">
      <div className="Global-situation-select">
        <div className="Display-data-research-containter select">
          <select name="display" onChange={onChangeDisplay}>
            <option value="cases">Total infected</option>
            <option value="todayCases">Today infected</option>
            <option value="deaths">Total deaths</option>
            <option value="todayDeaths">Today deaths</option>
            <option value="recovered">Total recovered</option>
            <option value="todayRecovered">Today recovered</option>
          </select>
        </div>
        <div className="select">
          <select name="sort" onChange={onChangeSort}>
            <option value="up">UP</option>
            <option value="down">DOWN</option>S
            <option value="apha">ALPHA</option>
          </select>
        </div>
      </div>
      <div className="Display-data-list-containter">
        <ul className="Country-container">
          <li className="Country-content Sticky">
            <div className="Country-data Strong">Total</div>
            <div className="Country-name Strong">Country</div>
          </li>
          <li className="Country-content Back">
            <div className="Country-data">
              {covid19Data ? (
                covid19Data
                  .map((covid) => displayList(listDisplay, covid))
                  .reduce((a, b) => a + b)
                  .toLocaleString("en")
              ) : (
                <></>
              )}
            </div>
            <div className="Country-name">
              <AiOutlineGlobal className="Global-icone" />
              <div className="Global-title">WorldWide</div>
            </div>
          </li>

          {covid19Data ? (
            covid19Data.sort(sort(sortDisplay, listDisplay)).map((covid, i) => (
              <li key={i} className="Country-content">
                <div className="Country-data">
                  {displayList(listDisplay, covid).toLocaleString("en")}
                </div>
                <div className="Country-name">
                  <img
                    className="Country-flag"
                    src={covid.countryInfo.flag}
                    alt="flag"
                  />
                  <div>{covid.country.substring(0, 19)}</div>
                </div>
              </li>
            ))
          ) : (
            <div>load</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GlobalSituation;
//covid19All.cases.toLocaleString("en")
