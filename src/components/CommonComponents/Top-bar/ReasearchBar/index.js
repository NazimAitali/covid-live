import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_COVID } from "../../../../redux/actions/covid";
const ReasearchBar = () => {
  const { covid19Data, countryResearch } = useSelector(
    (state) => state.coviData
  );
  const countryListe = covid19Data
    ? covid19Data.map((countryListe) => countryListe.country)
    : null;
  const dispatch = useDispatch();
  const onChangeliveDisplay = (e) => {
    dispatch({
      type: SET_COVID,
      payload: {
        countryResearch: e.target.value,
      },
    });
  };
  return (
    <div className="select">
      <select
        name="sort"
        onChange={onChangeliveDisplay}
        defaultValue={countryResearch}
      >
        {countryListe
          ? countryListe.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default ReasearchBar;
