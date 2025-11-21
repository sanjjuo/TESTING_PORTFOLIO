import gsap from "gsap";
import React from "react";

export const useProfileHeroFunction = () => {
  const imageRef = React.useRef(null);
  const [MousePosition, setMousePosition] = React.useState({
    left: 0,
    top: 0,
  });
  function handleMouseMove(ev: React.MouseEvent<HTMLDivElement>) {
    setMousePosition({ left: ev.pageX, top: ev.pageY });
  }

  React.useEffect(() => {
    if (!imageRef.current) return;

    const el = imageRef.current as HTMLElement;
    const container = el.parentElement as HTMLElement | null;

    // give the container some perspective for the 3D transform
    if (container) {
      container.style.perspective = "1200px";
    }
    el.style.transformStyle = "preserve-3d";

    const maxOffset = 10;
    const maxRotation = 12; // degrees
    const maxSkew = 6; // degrees

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const normX = MousePosition.left / windowWidth - 0.5;
    const normY = MousePosition.top / windowHeight - 0.5;

    const offsetX = normX * maxOffset;
    const offsetY = normY * maxOffset;

    const rotY = -normX * maxRotation;
    const rotX = normY * maxRotation;
    const skewX = -normX * maxSkew;
    const skewY = normY * maxSkew;

    gsap.to(el, {
      x: -offsetX,
      y: -offsetY,
      rotationX: rotX,
      rotationY: rotY,
      skewX: skewX,
      skewY: skewY,
      transformOrigin: "50% 50%",
      duration: 0.5,
      ease: "power2.out",
      overwrite: true,
    });
  }, [MousePosition]);
  return { handleMouseMove, imageRef };
};
