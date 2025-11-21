import { SVGProps } from "react";
const FramerMotion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    transform="rotate(360 0 0)"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#999da9"
      d="M18.666 2v6.667H12L5.333 2h13.333ZM5.333 8.667H12l6.666 6.666H12V22l-6.667-6.667V8.667Z"
    />
  </svg>
);
export default FramerMotion;
