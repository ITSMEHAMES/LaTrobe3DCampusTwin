"use client";
//added to this
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map, { PointOfInterest } from "./components/Map";

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

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swapMap = () => setCurrentIndex((prev) => (prev + 1) % maps.length);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Header />
      <div style={{ flex: 1, height: "100%", display: "flex" }}>
        <Map
          mapImage={maps[currentIndex].image}
          pointsOfInterest={maps[currentIndex].points}
          width="100%"
          height="100%"
        />
      </div>
      <Sidebar swapMap={swapMap} currentMapIndex={currentIndex} totalMaps={maps.length} />
    </div>
  );
}
