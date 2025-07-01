import React, { forwardRef, useImperativeHandle, useState } from "react";
import IsoCube from "./IsoCube";

const gridSize = 50;

const Grid = forwardRef(({ palette }, ref) => {
  const [grid, setGrid] = useState(() =>
    Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill(true))
  );

  useImperativeHandle(ref, () => ({
    clear: () =>
      setGrid(
        Array(gridSize)
          .fill()
          .map(() => Array(gridSize).fill(false))
      ),
    randomize: () =>
      setGrid(
        Array(gridSize)
          .fill()
          .map(() =>
            Array(gridSize)
              .fill()
              .map(() => Math.random() > 0.5)
          )
      ),
  }));

  const toggle = (x, z) => {
    const newGrid = grid.map((row) => [...row]);
    newGrid[x][z] = !newGrid[x][z];
    setGrid(newGrid);
  };

  const getColors = (x, z) => {
    const base = palette[(x + z) % palette.length];
    return [lighten(base, 0.2), base, darken(base, 0.2)];
  };

  return (
    <>
      {grid.map((row, x) =>
        row.map(
          (active, z) =>
            active && (
              <IsoCube
                key={`${x}-${z}`}
                position={[(x - z) * 0.866, 0, (x + z) * 0.5]}
                colors={getColors(x, z)}
                onClick={() => toggle(x, z)}
              />
            )
        )
      )}
    </>
  );
});

export default Grid;

function lighten(hex, amt) {
  return shadeColor(hex, amt * 100);
}
function darken(hex, amt) {
  return shadeColor(hex, -amt * 100);
}
function shadeColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (clamp(R, 0, 255) << 16) +
      (clamp(G, 0, 255) << 8) +
      clamp(B, 0, 255)
    )
      .toString(16)
      .slice(1)
  );
}
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
