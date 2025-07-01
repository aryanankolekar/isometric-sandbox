import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import Grid from "../components/Grid";

const IsoScene = forwardRef(({ palette }, ref) => {
  const gridRef = useRef();
  const controlsRef = useRef();

  useImperativeHandle(ref, () => ({
    resetView: () => controlsRef.current?.reset(),
    clearGrid: () => gridRef.current?.clear(),
    randomizeGrid: () => gridRef.current?.randomize(),
  }));

  return (
    <Canvas shadows>
      <OrthographicCamera
        makeDefault
        position={[30, 30, 30]}
        zoom={45}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[20, 40, 20]} intensity={0.8} />
      <OrbitControls
        ref={controlsRef}
        enableRotate={false}
        enableZoom={true}
        enablePan={true}
        mouseButtons={{
          LEFT: 0, // disable left
          MIDDLE: 1, // pan with middle
          RIGHT: 2,
        }}
      />
      <group rotation={[-Math.atan(Math.sqrt(2)), Math.PI / 4, 0]}>
        <Grid ref={gridRef} palette={palette} />
      </group>
    </Canvas>
  );
});

export default IsoScene;
