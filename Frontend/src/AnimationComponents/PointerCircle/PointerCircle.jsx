import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { pointsInner, pointsOuter } from "../../Components/Header/util.js";
import * as THREE from "three";

const PointerCircle = () => {
  const ref = useRef(null);
  const numPoints = pointsInner.length + pointsOuter.length;

  const meshRef = useRef();

  const dummy = new THREE.Object3D();

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
    /*The following condition is optimized using ChatGPT*/
    if (meshRef.current) {
      pointsInner.concat(pointsOuter).forEach((point, index) => {
        dummy.position.set(...point.position);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(index, dummy.matrix);
        meshRef.current.setColorAt(index, new THREE.Color(point.color));
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <group ref={ref}>
      <instancedMesh ref={meshRef} args={[null, null, numPoints]}>
        <sphereGeometry args={[0.1, 10, 10]} />
        <meshStandardMaterial />
      </instancedMesh>
    </group>
  );
};

export default PointerCircle;
