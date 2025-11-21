"use client";
import React, { SVGProps } from "react";
const FramerMotion = (props: SVGProps<SVGSVGElement>) => {
  const [hovered, setHovered] = React.useState(false);
  const gray = "#999da9";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 9"
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.09)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
      <path
        fill={
          hovered
            ? "var(--token-6d6f97c3-5f4a-41b8-a7b9-eff3df1acd75, rgb(255, 243, 18))"
            : gray
        }
        d="M9.062 0 4.32 8.992H0l3.703-7.021C4.277.882 5.709 0 6.902 0Zm10.594 2.248c0-1.242.967-2.248 2.16-2.248s2.16 1.006 2.16 2.248c0 1.242-.967 2.248-2.16 2.248s-2.16-1.006-2.16-2.248ZM9.872 0h4.32L9.45 8.992H5.13Zm5.102 0h4.32l-3.702 7.021c-.574 1.089-2.007 1.971-3.2 1.971h-2.16Z"
      />
    </svg>
  );
};
export default FramerMotion;
