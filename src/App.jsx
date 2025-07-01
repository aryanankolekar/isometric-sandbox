import React, { useRef, useState } from "react";
import IsoScene from "./scenes/IsoScene";
import Toolbar from "./components/Toolbar";

const pastelPalettes = [
  ["#f4d9d9", "#ecc9c7", "#d7b9b9"],
  ["#d5e8d4", "#b7ddb0", "#a3c9a8"],
  ["#cfe0e8", "#b2cfd4", "#a0bfc9"],
  ["#f6eac2", "#f9dfb5", "#e4cfa0"],
  ["#e2d6f0", "#cdb4db", "#bca0dc"],
];

export default function App() {
  const sceneRef = useRef();
  const [paletteIndex, setPaletteIndex] = useState(0);

  const nextPalette = () => {
    const next = (paletteIndex + 1) % pastelPalettes.length;
    setPaletteIndex(next);
  };

  return (
    <div className="w-screen h-screen relative">
      <IsoScene ref={sceneRef} palette={pastelPalettes[paletteIndex]} />
      <Toolbar
        onReset={() => sceneRef.current?.resetView()}
        onClear={() => sceneRef.current?.clearGrid()}
        onRandomize={() => sceneRef.current?.randomizeGrid()}
        onPaletteChange={nextPalette}
      />
    </div>
  );
}
