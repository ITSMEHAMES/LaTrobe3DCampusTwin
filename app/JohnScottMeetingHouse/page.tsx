"use client";

import React from "react";
import Header from "../components/Header";

export default function PlaceholderPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3f4f6", // Tailwind gray-100 equivalent
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            🚧 Coming Soon 🚧
          </h1>
          <p style={{ fontSize: "1.125rem" }}>
            This page is under construction. Please check back later.
          </p>
        </div>
      </main>
    </div>
  );
}
