"use client";

import React from "react";

export interface PointOfInterest {
  x: number;
  y: number;
  label: string;
  info?: string; // optional additional info
}

interface MapProps {
  mapImage: string;
  pointsOfInterest: PointOfInterest[];
  width?: number | string;
  height?: number | string;
  onPOIClick?: (poi: PointOfInterest) => void; // callback when clicked
}

const Map: React.FC<MapProps> = ({ mapImage, pointsOfInterest, width = 400, height = 400, onPOIClick }) => {
  return (
    <div style={{ position: "relative", width, height }}>
      <img src={mapImage} alt="Map" style={{ width: "100%", height: "100%", display: "block" }} />

      {pointsOfInterest.map((poi, index) => (
        <button
          key={index}
          onClick={() => onPOIClick && onPOIClick(poi)}
          style={{
            position: "absolute",
            left: `${poi.x}%`,
            top: `${poi.y}%`,
            transform: "translate(-50%, -50%)",
            background: "red",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "12px",
            cursor: "pointer",
            border: "none",
          }}
          title={poi.label}
        >
          •
        </button>
      ))}
    </div>
  );
};

export default Map;
