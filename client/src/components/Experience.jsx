import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "../styles/Experience.scss";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useControls } from "leva";
import { Lambo2 } from "./Lambo2";
import { Ferrari } from "./Ferrari";
import { Mustang } from "./Mustang";
import { ContactShadows } from "@react-three/drei";
import { saveCarData, saveOrder, getCartCount } from "./clientReq";
import { v4 as uuid } from "uuid";

const Experience = ({ user }) => {
  const navigate = useNavigate();
  const [currentCar, setCurrentCar] = useState(1);
  const [preset, setPreset] = useState("dawn");
  const [cartCount, setCartCount] = useState(0);
  const [currentChanges, setCurrentChanges] = useState({});

  const carsArr = ["Ferrari", "Lambo", "Mustang"];

  const carIndex = {
    Ferrari: 0,
    Lambo: 1,
    Mustang: 2,
  };

  const color = useControls({
    car: {
      value: "Lambo",
      options: ["Ferrari", "Mustang"],
      onChange: (e) => {
        setCurrentCar(carIndex[e]);
      },
    },
    preset: {
      value: preset,
      options: ["warehouse", "city", "dawn"],
      onChange: (e) => {
        setPreset(e);
      },
    },
    body: "#adadad",
    tire: "#212121",
    rim: "#1a1a1a",
    line: "#ffffff",
  });

  const cars = [
    <Ferrari color={color} />,
    <Lambo2 color={color} />,
    <Mustang color={color} />,
  ];

  useEffect(() => {
    if (!user) {
      console.log("Please login");
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    cartCountGET();
  }, []);

  const handleSave = () => {
    if (currentChanges != color) {
      setCurrentChanges(color);

      const postData = {
        username: user,
        modelName: carsArr[currentCar],
        bodyColor: color.body,
        tireColor: color.tire,
        rimColor: color.rim,
        lineColor: color.line,
      };

      saveCarData(postData);
      console.log("Saved");
    }
  };

  const handleOrder = () => {
    const postData = {
      username: user,
      orderNo: uuid().slice(0, 8),
      paymentStatus: "Done",
      modelName: carsArr[currentCar],
      bodyColor: color.body,
      tireColor: color.tire,
      rimColor: color.rim,
      lineColor: color.line,
    };
    saveOrder(postData);

    cartCountGET();
  };

  const cartCountGET = () => {
    getCartCount({ username: user })
      .then((data) => {
        setCartCount(data.data.count);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="experience">
      <Canvas shadows camera={{ position: [3, 0.75, -4.5], fov: 55 }}>
        <ambientLight intensity={2} position={[5, 5, 0]} />
        <group position={[0, -0.5, 0]}>
          {cars.map((c, i) => (
            <group key={i}>{i == currentCar && c}</group>
          ))}
          <ContactShadows opacity={0.6} />
        </group>
        <Environment preset={preset} background blur={10} />
        <OrbitControls
          minDistance={4}
          maxDistance={12}
          enablePan={false}
          autoRotate={false}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.125}
        />
      </Canvas>
      <div className="btn-container">
        <button
          id="save-btn"
          className={`button ${
            currentChanges != color ? "changes" : "no-changes"
          }`}
          onClick={() => {
            handleSave();
          }}
        >
          {currentChanges != color ? "💾" : "✔️"}
        </button>
        <button id="cart-btn" className="button" onClick={() => handleOrder()}>
          {"🛒" + cartCount}
        </button>
      </div>
    </div>
  );
};

export default Experience;
