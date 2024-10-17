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
        style={{ height: "100vh", backgroundColor: "#fff" }}
        className=""
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointerCircle />
      </Canvas>

      <h1
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-black-100 font-medium  text-[4rem] md:text-[5rem] lg:text-[6vw] xl:text-[8vw]  pointer-events-none uppercase max-w-[6ch] tracking-tighter text-black"
        style={{ lineHeight: "0.75" }}
      >
        Aiming for Simpler Faster Clear.
      </h1>
    </div>
  );
};

export default HeroHeader;
