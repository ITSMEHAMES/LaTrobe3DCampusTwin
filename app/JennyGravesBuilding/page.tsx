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
          objPath="/3DFiles/testobj.obj"
          mtlPath="/3DFiles/testobj.mtl"
        />
      </div>
    </div>
  );
}
