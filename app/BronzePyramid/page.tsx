"use client";

import React from "react";
import Header from "../components/Header";
import ModelViewer from "../components/modelViewer";

export default function ModelViewerPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3f4f6",
          padding: "1rem",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px", height: "600px" }}>
          <ModelViewer
            objPath="/3DFiles/testsplat.obj"
            mtlPath="/3DFiles/testsplat.mtl"
          />
        </div>
      </main>
    </div>
  );
}
