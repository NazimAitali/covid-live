import { MapContainer, GeoJSON } from "react-leaflet";
import { Cases } from "../../../functions/dataMap";

const Mapcontainer = ({ myMap }) => {
  let center = {
    lat: 40,
    lng: 0,
  };
  const countriesStyles = {
    color: "white",
    fillOpacity: 0.5,
    weight: 0.5,
    dashArray: 0.5,
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={center}
        zoom={1.5}
        minZoom={1.5}
        scrollWheelZoom={true}
        dragging={true}
        boxZoom={false}
      >
        <GeoJSON style={countriesStyles} data={myMap} onEachFeature={Cases} />
      </MapContainer>
    </div>
  );
};

export default Mapcontainer;
