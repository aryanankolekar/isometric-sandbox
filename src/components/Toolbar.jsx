import React from "react";

export default function Toolbar({
  onReset,
  onClear,
  onRandomize,
  onPaletteChange,
}) {
  return (
    <div className="fixed top-4 left-4 flex flex-col space-y-2 bg-slate-800 p-4 rounded-xl shadow-xl z-10">
      <button onClick={onReset} className="btn">
        Reset View
      </button>
      <button onClick={onClear} className="btn">
        Clear Grid
      </button>
      <button onClick={onRandomize} className="btn">
        Randomize
      </button>
      <button onClick={onPaletteChange} className="btn">
        Change Colors
      </button>
    </div>
  );
}
