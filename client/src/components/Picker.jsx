import React, { useRef, useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { useSnapshot, proxy } from "valtio";

const state = proxy({
  current: null,
  items: {
    laces: "#fff",
    mesh: "#fff",
    caps: "#fff",
    inner: "#fff",
    sole: "#fff",
    stripes: "#fff",
    band: "#fff",
    patch: "#fff",
  },
});

const Picker = () => {
  const snap = useSnapshot(state);

  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <h1>Hello</h1>
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
};

export default Picker;
