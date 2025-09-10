"use client";

import React from "react";
import Header from "./components/Header";
import MapSwitcher from "./components/MapSwitcher";

export default function Page() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Header />
      <MapSwitcher />
    </div>
  );
}
