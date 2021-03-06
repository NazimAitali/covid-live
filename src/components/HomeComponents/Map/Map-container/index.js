import { MapContainer, GeoJSON } from "react-leaflet";
import { Cases } from "../../../../functions/MapFunction";
const Mapcontainer = ({ geoJson }) => {
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
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0D1117",
        borderRadius: "15px",
      }}
    >
      <MapContainer
        center={center}
        zoom={1.5}
        minZoom={1.5}
        scrollWheelZoom={false}
        dragging={true}
        boxZoom={false}
      >
        <GeoJSON style={countriesStyles} data={geoJson} onEachFeature={Cases} />
      </MapContainer>
    </div>
  );
};

export default Mapcontainer;
