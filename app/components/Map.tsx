"use client";

import React from "react";

export interface PointOfInterest {
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  label: string;
}

interface MapProps {
  mapImage: string; // URL to image
  pointsOfInterest: PointOfInterest[];
  width?: number | string;  // optional width
  height?: number | string; // optional height
}

const Map: React.FC<MapProps> = ({ mapImage, pointsOfInterest, width = 400, height = 400 }) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
      }}
    >
      <img
        src={mapImage}
        alt="Map"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {pointsOfInterest.map((poi, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${poi.x}%`,
            top: `${poi.y}%`,
            transform: "translate(-50%, -50%)",
            background: "red",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "10px",
            cursor: "pointer",
          }}
          title={poi.label}
        >
          •
        </div>
      ))}
    </div>
  );
};

export default Map;
