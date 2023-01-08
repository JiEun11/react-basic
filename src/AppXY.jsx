import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e);
        // handleMouseMove(e);
        setPosition({ x: e.clientX, y: e.clientY });
      }}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        // style={{ position: "absolute", left: xy.x, top: xy.y }}
      />
    </div>
  );
}
