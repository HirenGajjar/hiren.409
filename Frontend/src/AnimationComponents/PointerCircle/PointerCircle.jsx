// PointCircle.jsx

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { pointsInner, pointsOuter } from "../../Components/Header/util.js"; // Ensure your util.js is correctly imported
import Point from "../Point/Point";

const PointerCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

export default PointerCircle;
