import React, { useEffect, useState } from "react";
import mapData from "../data/countries.json";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataToday,
  getDataYesterday,
  getAll,
  getlocalisation,
} from "../api";
import { SET_COVID } from "../redux/actions/covid";
import Home from "../screen/Home";
import Historique from "../screen/Historique";
import Menu from "../components/Menu";
import { Switch, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const { covid19Data, covid19DataYesterday, covid19All } = useSelector(
    (state) => state.coviData
  );
  const [myMap, setmyMap] = useState(null);

  const geoMap = async () => {
    await setmyMap(mapData.features);
    dispatch({
      type: SET_COVID,
      payload: {
        loaderjson: true,
      },
    });
  };

  useEffect(() => {
    const geo = async () => {
      await getlocalisation(dispatch);
      await geoMap();
      await getDataToday(dispatch);
      await getDataYesterday(dispatch);
      await getAll(dispatch);
    };
    geo();
  }, []);
  return (
    <div className="Global-container">
      <Menu />
      <Switch>
        <Route path="/History">
          <Historique />
        </Route>
        <Route path="/">
          <Home
            myMap={myMap}
            covid19All={covid19All}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
