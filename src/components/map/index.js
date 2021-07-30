import React, { useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "leaflet/dist/leaflet.css";
import "./style.css";
import Mapcontainer from "./map-container";
import { pushInMyMap } from "../../functions/push";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loder";
import { SET_COVID } from "../../redux/actions/covid";
const Map = ({ myMap }) => {
  const dispatch = useDispatch();
  const { covid19Data, loaderjson, MapDisplay } = useSelector(
    (state) => state.coviData
  );
  useEffect(() => {
    const push = async () => {
      await pushInMyMap(covid19Data, myMap, MapDisplay);
      await dispatch({
        type: SET_COVID,
        payload: {
          loaderjson: false,
        },
      });
    };
    push();
  }, [covid19Data]);

  return (
    <div className="container">
      <div className="Map-title-container">
        <div className="Map-title-content">
          <div className="Map-title">
            {" "}
            <div>Covid 19 - Infected all time</div>
          </div>
        </div>
        <div className="Map-color-content">
          <ul className="Map-color">
            <li className="Dots">1</li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#3db657" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#ccd629" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#ffd701" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#f99e32" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#f7913c" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#e76d0a" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#df430f" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#de2f10" }} />
            </li>
            <li className="Dots">
              {" "}
              <GoPrimitiveDot style={{ color: "#d21313" }} />
            </li>

            <li className="Dots" style={{ width: "20%" }}>
              {" "}
              Over 30 M
            </li>
          </ul>
        </div>
      </div>
      {loaderjson ? (
        <Loader />
      ) : (
        <div style={{ width: "100%", height: "100%" }}>
          {" "}
          <Mapcontainer MapDisplay={MapDisplay} myMap={myMap} />
          {/* <MapContainer
            center={center}
            zoom={1.5}
            minZoom={1.5}
            scrollWheelZoom={true}
            dragging={true}
            boxZoom={false}
          >
            <GeoJSON
              style={countriesStyles}
              data={myMap}
              onEachFeature={onEachCountries}
            />
          </MapContainer> */}
        </div>
      )}
    </div>
  );
};

export default Map;
