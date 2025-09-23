"use client";

import React from "react";
import Header from "../components/Header";
import ModelViewer from "../components/modelViewer";

export default function ModelViewerPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ flex: 1, position: "relative" }}>
        <ModelViewer
          objPath="/3DFiles/colourtest.obj"
          mtlPath="/3DFiles/colourtest.mtl"
        />
      </div>
    </div>
  );
}
