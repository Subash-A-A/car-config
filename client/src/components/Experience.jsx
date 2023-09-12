import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "../styles/Experience.scss";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";

import { Env } from "./Env";
import { useControls } from "leva";

const Experience = () => {
  const { roughness } = useControls({
    roughness: { value: 1, min: 0, max: 1 },
  });
  return (
    <div id="experience">
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <group position={[0, 0, 0]}>
          <mesh castShadow position={[0, 0, 0]}>
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial metalness={1} roughness={roughness} />
          </mesh>
        </group>
        <Env />
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
};

export default Experience;
