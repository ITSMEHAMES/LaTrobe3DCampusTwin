"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Suspense, useMemo } from "react";

// Loader overlay
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "white" }}>{progress.toFixed(0)} % loaded</span>
    </Html>
  );
}

// Model
function Model({ objPath, mtlPath }: { objPath: string; mtlPath: string }) {
  const materials = useMemo(() => useLoader(MTLLoader, mtlPath), [mtlPath]);
  materials.preload();

  const object = useMemo(
    () =>
      useLoader(OBJLoader, objPath, (loader) => {
        (loader as unknown as OBJLoader).setMaterials(materials);
      }),
    [objPath, materials]
  );

  return <primitive object={object} scale={0.5} />;
}

// Viewer props
interface ModelViewerProps {
  objPath: string;
  mtlPath: string;
}

export default function ModelViewer({ objPath, mtlPath }: ModelViewerProps) {
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
          <Model objPath={objPath} mtlPath={mtlPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
