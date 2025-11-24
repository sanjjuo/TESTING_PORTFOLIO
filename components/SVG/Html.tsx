"use client";
import React, { SVGProps, useState } from "react";

const Html = (props: SVGProps<SVGSVGElement>) => {
  const [hovered, setHovered] = useState(false);
  const gray = "#999da9";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
        fill={hovered ? "#E65100" : gray}
        d="M41 5H7l3 34 14 4 14-4 3-34z"
      />
      <path fill={hovered ? "#FF6D00" : gray} d="M24 8v31.9l11.2-3.2L37.7 8z" />
      <path
        fill={"#FFF"}
        d="M24 25v-4h8.6l-.7 11.5-7.9 2.6v-4.2l4.1-1.4.3-4.5H24zm8.9-8 .3-4H24v4h8.9z"
      />
      <path
        fill={"#EEE"}
        d="M24 30.9v4.2l-7.9-2.6-.4-5.5h4l.2 2.5 4.1 1.4zM19.1 17H24v-4h-9.1l.7 12H24v-4h-4.6l-.3-4z"
      />
    </svg>
  );
};
export default Html;
