"use client";

import React, { useState } from "react";
import Map, { PointOfInterest } from "./Map";

interface MapData {
  image: string;
  points: PointOfInterest[];
}

const maps: MapData[] = [
  {
    image: "/images/internet/2014_0006_005.jpg",
    points: [
      { x: 20, y: 30, label: "POI 1" },
      { x: 50, y: 50, label: "POI 2" },
    ],
  },
  {
    image: "/images/internet/2014_0006_099.jpg",
    points: [
      { x: 10, y: 40, label: "POI A" },
      { x: 60, y: 70, label: "POI B" },
    ],
  },
  {
    image: "/images/internet/DlqvQYDXoAEBkxX.jpg",
    points: [
      { x: 30, y: 20, label: "POI X" },
      { x: 80, y: 90, label: "POI Y" },
    ],
  },
];

const MapSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swapMap = () => setCurrentIndex((prev) => (prev + 1) % maps.length);

  return (
    <div
      style={{
        position: "fixed",
        top: 80,   // below header
        left: 0,   // dock to left
      }}
    >
      <Map
        mapImage={maps[currentIndex].image}
        pointsOfInterest={maps[currentIndex].points}
        width={1200}   // set your desired width
        height={600}  // set your desired height
      />
      <button onClick={swapMap} style={{ marginTop: "0.5rem" }}>
        Swap Map
      </button>
    </div>
  );
};

export default MapSwitcher;
