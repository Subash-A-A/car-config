import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "../styles/Experience.scss";
import { Environment, OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

import { useControls } from "leva";
import { Lambo2 } from "./Lambo2";
import { Ferrari } from "./Ferrari";
import { Mustang } from "./Mustang";
import { ContactShadows } from "@react-three/drei";

const Experience = ({ user }) => {
  const navigate = useNavigate();
  const [car, setCar] = useState(2);

  const carIndex = {
    Ferrari: 0,
    Lambo: 1,
    Mustang: 2,
  };

  const color = useControls({
    car: {
      value: "Ferrari",
      options: ["Lambo", "Mustang"],
      onChange: (e) => {
        setCar(carIndex[e]);
      },
    },
  });

  useEffect(() => {
    if (!user) {
      console.log("Please login");
      navigate("/");
      alert("Please Login");
    }
  }, [user]);

  return (
    <div id="experience">
      <Canvas shadows camera={{ position: [5, 3, 4.5], fov: 35 }}>
        <ambientLight intensity={2} position={[5, 5, 0]} />
        <group position={[0, -0.5, 0]}>
          {car == 0 && <Ferrari />}
          {car == 1 && <Lambo2 />}
          {car == 2 && <Mustang />}
          <ContactShadows opacity={0.6} smooth />
        </group>
        <Environment preset="city" background blur={0.7} />
        <OrbitControls
          minDistance={4}
          maxDistance={12}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.125}
        />
      </Canvas>
    </div>
  );
};

export default Experience;
