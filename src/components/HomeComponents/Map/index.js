import React, { useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "leaflet/dist/leaflet.css";
import Mapcontainer from "./Map-container";
import { pushInMyMap } from "../../../functions/push";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../CommonComponents/Loder";
import { SET_COVID } from "../../../redux/actions/covid";
const Map = () => {
  const dispatch = useDispatch();
  const { covid19Data, loaderjson, geoJson } = useSelector(
    (state) => state.coviData
  );
  useEffect(() => {
    const push = async () => {
      await pushInMyMap(covid19Data, geoJson, dispatch);
      await dispatch({
        type: SET_COVID,
        payload: {
          loaderjson: false,
        },
      });
    };
    push();
  }, [covid19Data]); // eslint-disable-next-line react-hooks/exhaustive-deps

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

            <li className="Dots Last"> Over 30 M</li>
          </ul>
        </div>
      </div>
      {loaderjson ? (
        <Loader />
      ) : (
        <div style={{ width: "100%", height: "100%" }}>
          {" "}
          <Mapcontainer geoJson={geoJson} />
        </div>
      )}
    </div>
  );
};

export default Map;
