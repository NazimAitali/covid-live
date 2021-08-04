import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_COVID } from "../../../../redux/actions/covid";
const ReasearchBar = () => {
  const { localisation, covid19Data } = useSelector((state) => state.coviData);
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
      <select name="sort" onChange={onChangeliveDisplay}>
        {localisation ? (
          <option selected disabled value={localisation.country}>
            {localisation.country}
          </option>
        ) : null}{" "}
        {countryListe
          ? countryListe.map((option,i) => (
              <option key={i} value={option}>{option}</option>
            ))
          : null}
      </select>
    </div>
  );
};

export default ReasearchBar;
