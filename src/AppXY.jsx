import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [xy, setXY] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e);
        setX(e.clientX);
        setY(e.clientY);
        // handleMouseMove(e);
      }}>
      <div
        className="pointer"
        style={{ transform: `translate(${x}px, ${y}px)` }}
        // style={{ position: "absolute", left: xy.x, top: xy.y }}
      />
    </div>
  );
}
