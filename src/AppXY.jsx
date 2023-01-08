import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [xy, SetXY] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    SetXY({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="container" onMouseMove={(e) => handleMouseMove(e)}>
      <div
        className="pointer"
        style={{ position: "absolute", left: xy.x, top: xy.y }}
      />
    </div>
  );
}
