
import { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

const circles = [
  { lat: -5.1959070, lng: -80.627010, radius: 30 },
  { lat: -5.1956000, lng: -80.627410, radius: 30 },
];

const Map = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  const handleApiLoad = (map, maps) => {
    setMap(map);
    circles.forEach(circle => {
      new maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: { lat: circle.lat, lng: circle.lng },
        radius: circle.radius
      });
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCYB8Oqb4bDWqT0OWh2VWwLYt98TIr2E04" }}
        defaultCenter={{ lat: -5.1957433, lng: -80.626726 }}
        defaultZoom={20}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoad(map, maps)}
        ref={mapRef}
      />
    </div>
  );
};

export default Map;

/*
import React from 'react';
import Map from './helpers/areaCircle';

const App = () => {

  const center = {
    lat: -5.1957433, -5.1956071,-80.627737
    lng: -80.626726
  };
  return (
    <Map
      center={center}
      zoom={18}
      circleRadius={14}
    />
  );
};

export default App;
*/
