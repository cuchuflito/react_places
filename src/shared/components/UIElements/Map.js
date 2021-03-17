import React, { useRef, useEffect } from "react";
import classes from "./Map.module.css";

const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;
    // console.log(props)

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });
    
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`${props.className} ${classes.Map}`}
      style={props.style}
    ></div>
  );
};

export default Map;
