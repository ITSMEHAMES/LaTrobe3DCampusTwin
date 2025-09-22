"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        padding: "1rem",
        background: "#e22333", // La Trobe red
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Left side: Logo + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src="/Images/LaTrobeLogo.png" alt="Logo" width={120} height={60} />
        <h1
          style={{
            margin: 0,
            font: "bold 24px/1.2 Arial, Helvetica, sans-serif",
            color: "white",
          }}
        >
          La Trobe 3D Campus Viewer
        </h1>
      </div>

      {/* Right side: Links + Dropdown */}
      <div style={{ marginLeft: "auto", display: "flex", gap: "1rem", alignItems: "center" }}>
        <a
          href="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          About
        </a>

        {/* Dropdown Menu */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            3D Models ▾
          </button>

          {menuOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                marginTop: "0.5rem",
                background: "rgba(255, 255, 255, 0.85)", // semi-transparent white
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                minWidth: "200px",
                zIndex: 2000,
              }}
            >
              <a href="/BronzePyramid" style={{ padding: "0.75rem", textDecoration: "none", color: "black" }}>
                Bronze Pyramid
              </a>
              <a href="/GraduateHouseWest" style={{ padding: "0.75rem", textDecoration: "none", color: "black" }}>
                Graduate House West
              </a>
              <a href="/JennyGravesBuilding" style={{ padding: "0.75rem", textDecoration: "none", color: "black" }}>
                Jenny Graves Building
              </a>
              <a href="/JohnScottMeetingHouse" style={{ padding: "0.75rem", textDecoration: "none", color: "black" }}>
                John Scott Meeting House
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
