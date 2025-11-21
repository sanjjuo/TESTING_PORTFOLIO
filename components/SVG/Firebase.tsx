"use client";
import React, { SVGProps } from "react";
const Firebase = (props: SVGProps<SVGSVGElement>) => {
  const [hovered, setHovered] = React.useState(false);
  const gray = "#999da9";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 48 48"
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
        fill={hovered ? "#ff8f00" : gray}
        d="M8 37 23.234 8.436a.84.84 0 0 1 1.494.02L30 19 8 37z"
      />
      <path
        fill={hovered ? "#ffa000" : gray}
        d="m8 36.992 5.546-34.199c.145-.895 1.347-1.089 1.767-.285L26 22.992l-18 14z"
      />
      <path
        fill={hovered ? "#ff6f00" : "#fff"}
        d="m8.008 36.986.2-.157 17.529-14.341-4.944-9.476z"
      />
      <path
        fill={hovered ? "#ffc400" : gray}
        d="m8 37 26.666-25.713a.954.954 0 0 1 1.606.547L40 37l-15 8.743a2.002 2.002 0 0 1-1.961 0L8 37z"
      />
    </svg>
  );
};
export default Firebase;
