import React from "react";
import { OrbitControls } from "@react-three/drei";

export default function Controls() {
  return (
    <OrbitControls
      enablePan={false}
      rotateSpeed={0.6}
      minPolarAngle={Math.PI / 4} // 45° min tilt
      maxPolarAngle={(3 * Math.PI) / 5} // 108° max tilt
      dampingFactor={0.15}
    />
  );
}
