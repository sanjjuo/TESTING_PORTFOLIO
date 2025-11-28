"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import React from "react";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const oneRef = React.useRef<HTMLDivElement | null>(null);
  const twoRef = React.useRef<HTMLDivElement | null>(null);
  const threeRef = React.useRef<HTMLDivElement | null>(null);
  const fourRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!oneRef || !twoRef || !threeRef || !fourRef) return;
    const tl = gsap.timeline();
    tl.set(
      [oneRef.current, twoRef.current, threeRef.current, fourRef.current],
      {
        yPercent: 0,
      }
    ).to([oneRef.current, twoRef.current, threeRef.current, fourRef.current], {
      yPercent: -100,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  }, [pathname]);

  return (
    <div>
      <div
        ref={oneRef}
        className="bg-white min-h-screen fixed left-0 z-50"
        style={{ width: "100vw", transform: "translateX(0%)" }}
      />
      <div
        ref={twoRef}
        className="bg-white min-h-screen fixed left-0 z-50"
        style={{ width: "100vw", transform: "translateX(25%)" }}
      />
      <div
        ref={threeRef}
        className="bg-white min-h-screen fixed left-0 z-50"
        style={{ width: "100vw", transform: "translateX(50%)" }}
      />
      <div
        ref={fourRef}
        className="bg-white min-h-screen fixed left-0 z-50"
        style={{ width: "100vw", transform: "translateX(75%)" }}
      />
      <div className="z-30">{children}</div>
    </div>
  );
}
