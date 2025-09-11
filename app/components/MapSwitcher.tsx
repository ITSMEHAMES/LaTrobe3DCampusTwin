"use client";

import React, { useState } from "react";
import Map, { PointOfInterest } from "./Map";
import Sidebar from "./Sidebar";

const maps: { image: string; points: PointOfInterest[] }[] = [
  {
    image: "/images/internet/2014_0006_005.jpg",
    points: [
      { x: 20, y: 30, label: "POI 1", info: "This is POI 1 info" },
      { x: 50, y: 50, label: "POI 2", info: "This is POI 2 info" },
    ],
  },
  {
    image: "/images/internet/2014_0006_099.jpg",
    points: [
      { x: 10, y: 40, label: "POI A", info: "Info about POI A" },
      { x: 60, y: 70, label: "Info about POI B", info: "POI B info here" },
    ],
  },
  {
    image: "/images/internet/DlqvQYDXoAEBkxX.jpg",
    points: [
      { x: 30, y: 20, label: "POI X", info: "POI X info" },
      { x: 80, y: 90, label: "POI Y", info: "POI Y info" },
    ],
  },
];

const MapSwitcher: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPOI, setSelectedPOI] = useState<PointOfInterest | null>(null);

  const swapMap = () => {
    setCurrentIndex((prev) => (prev + 1) % maps.length);
    setSelectedPOI(null); // reset selected POI when swapping maps
  };

  const handlePOIClick = (poi: PointOfInterest) => {
    setSelectedPOI(poi);
  };

  return (
    <>
      <div style={{ flex: 1, position: "relative" }}>
        <Map
          mapImage={maps[currentIndex].image}
          pointsOfInterest={maps[currentIndex].points}
          width="100%"
          height="100%"
          onPOIClick={handlePOIClick}
        />
      </div>

      <Sidebar
        currentMapIndex={currentIndex}
        totalMaps={maps.length}
        swapMap={swapMap}
        selectedPOI={selectedPOI} // pass selected POI to sidebar
      />
    </>
  );
};

export default MapSwitcher;
