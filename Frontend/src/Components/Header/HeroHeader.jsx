// HeroHeader.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import PointerCircle from "../../AnimationComponents/PointerCircle/PointerCircle";

const HeroHeader = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh", backgroundColor: "#fafafa" }}
        className=""
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointerCircle />
      </Canvas>

      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-black-100 font-medium text-2xl md:text-5xl pointer-events-none uppercase max-w-[6ch]">
        Aiming for Simpler Faster Clear.
      </h1>
    </div>
  );
};

export default HeroHeader;
