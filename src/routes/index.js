import React, { useEffect } from "react";
import mapData from "../data/countries.json";
import { useDispatch } from "react-redux";
import { fetchDataToday, fetchDataYesterday } from "../api";
import { SET_COVID } from "../redux/actions/covid";
import Home from "../screen/Home";
import Historique from "../screen/Historique";
import Menu from "../components/CommonComponents/Menu";
import { Switch, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch();

  const geoMap = async () => {
    await dispatch({
      type: SET_COVID,
      payload: {
        geoJson: mapData.features,
      },
    });
  };
  useEffect(() => {
    geoMap();
    fetchDataToday(dispatch);
    fetchDataYesterday(dispatch);
  });

  return (
    <div className="Global-container">
      <Menu />
      <Switch>
        <Route path="/History">
          <Historique />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
