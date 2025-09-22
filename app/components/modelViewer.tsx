"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Suspense } from "react";

// Loader overlay
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "white" }}>{progress.toFixed(0)} % loaded</span>
    </Html>
  );
}

// Model component
interface ModelProps {
  objPath: string;
}

function Model({ objPath }: ModelProps) {
  const object = useLoader(OBJLoader, objPath);
  return <primitive object={object} scale={0.5} />;
}

// Viewer props
interface ModelViewerProps {
  objPath: string;
}

export default function ModelViewer({ objPath }: ModelViewerProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [3, 3, 3], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model objPath={objPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
