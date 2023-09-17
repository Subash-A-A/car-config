import React, { useState } from "react";
import { useTransition } from "react";
import { Environment } from "@react-three/drei";
import { useControls } from "leva";

export function Env() {
  const [preset, setPreset] = useState("warehouse");
  const [inTransition, startTransition] = useTransition();
  const { blur } = useControls({
    blur: { value: 0.7, min: 0, max: 1 },
    preset: {
      value: preset,
      options: [
        "sunset",
        "dawn",
        "night",
        "warehouse",
        "forest",
        "apartment",
        "studio",
        "city",
        "park",
        "lobby",
      ],
      onChange: (value) => startTransition(() => setPreset(value)),
    },
  });
  return <Environment preset={preset} background blur={blur} />;
}
