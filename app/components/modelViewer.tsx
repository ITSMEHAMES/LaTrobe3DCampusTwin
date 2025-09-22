"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Suspense } from "react";

// Loader UI
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "white" }}>{progress.toFixed(0)} % loaded</span>
    </Html>
  );
}

// Model component
function Model({ objPath, mtlPath }: { objPath: string; mtlPath: string }) {
  const materials = useLoader(MTLLoader, mtlPath);
  materials.preload();

  const object = useLoader(OBJLoader, objPath, (loader) => {
    (loader as unknown as OBJLoader).setMaterials(materials);
  });

  return <primitive object={object} scale={0.5} />;
}

// Main Viewer component
interface ModelViewerProps {
  objPath: string;
  mtlPath: string;
}

export default function ModelViewer({ objPath, mtlPath }: ModelViewerProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }} style={{ background: "#111" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model objPath={objPath} mtlPath={mtlPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
