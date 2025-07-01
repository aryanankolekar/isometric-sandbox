import React from "react";

export default function IsoCube({ position, colors, onClick }) {
  const [topColor, leftColor, rightColor] = colors;

  return (
    <mesh position={position} castShadow receiveShadow onClick={onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material-0" color={rightColor} />
      <meshStandardMaterial attach="material-1" color={rightColor} />
      <meshStandardMaterial attach="material-2" color={topColor} />
      <meshStandardMaterial attach="material-3" color={leftColor} />
      <meshStandardMaterial attach="material-4" color={leftColor} />
      <meshStandardMaterial attach="material-5" color={topColor} />
    </mesh>
  );
}
