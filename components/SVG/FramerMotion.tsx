"use client";
import React, { SVGProps } from "react";
const FramerMotion = (props: SVGProps<SVGSVGElement>) => {
  const [hovered, setHovered] = React.useState(false);
  const gray = "#999da9";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.09)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
      <g fill={hovered ? "#FFF" : gray}>
        <path fillOpacity={0.5} d="M12 21V9H6v6l6 6Z" />
        <path d="M18 9V3H6l6 6H6v6h12l-6-6h6Z" />
      </g>
    </svg>
  );
};
export default FramerMotion;
