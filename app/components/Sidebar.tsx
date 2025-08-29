"use client";

import React from "react";

interface SidebarProps {
  swapMap: () => void;
  currentMapIndex: number;
  totalMaps: number;
}

const Sidebar: React.FC<SidebarProps> = ({ swapMap, currentMapIndex, totalMaps }) => {
  return (
    <aside
      style={{
        position: "fixed",
        top: 80, 
        right: 0,
        width: "240px",
        height: "calc(100vh - 80px)",
        background: "#111", 
        color: "#fff",    
        borderLeft: "2px solid #e22333",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        zIndex: 900,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "18px", color: "#e22333" }}>Interactive Tour</h2>
      
      <p style={{ margin: "0.5rem 0" }}>
        Map {currentMapIndex + 1} of {totalMaps}
      </p>

      <button
        onClick={swapMap}
        style={{
          padding: "0.5rem",
          background: "#e22333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Swap Map
      </button>

      <div style={{ marginTop: "1rem", fontSize: "14px", lineHeight: "1.4" }}>
        <p>Welcome to the La Trobe 3D Campus Viewer!</p>
        <p><strong>Legend:</strong></p>
        <ul style={{ paddingLeft: "1rem", margin: 0 }}>
          <li>• Red dot: Point of Interest</li>
          <li>• Blue dot: Facility</li>
          <li>• Green dot: Parking</li>
        </ul>
        
      </div>
    </aside>
  );
};

export default Sidebar;
