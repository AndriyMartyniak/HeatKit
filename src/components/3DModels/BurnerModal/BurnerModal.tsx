"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/assets/burner-3d/scene.gltf");
  return (
    <primitive
      object={scene}
      scale={0.5}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / -1.3, 0]}
    />
  );
}

const BurnerModal = () => {
  return (
    <div className="full">
      <Canvas
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#e9eff2",
          borderRadius: "20px",
        }}
      >
        <ambientLight intensity={1} />

        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />

        <directionalLight position={[10, -10, -10]} intensity={1} castShadow />
        <directionalLight position={[-10, 10, 10]} intensity={1} castShadow />

        <Model />
        <OrbitControls
        //   minPolarAngle={Math.PI / 2}
        //   maxPolarAngle={Math.PI / 2}
        // enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default BurnerModal;
