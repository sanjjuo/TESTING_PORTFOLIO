"use client";
import { Button } from "@/components/ui/button";
import { useLetsWorkGsap } from "./Animations/useLetsWorkGsap";
import Link from "next/link";

export const LetsWork = () => {
  const { sectionRef, descTextRef, btnRef } = useLetsWorkGsap();
  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center overflow-hidden h-screen"
    >
      <div className="relative">
        <h1
          style={{ fontFamily: "humane" }}
          className="flex items-center justify-center h-full text-[180px] lg:text-[350px] uppercase font-bold opacity-5"
        >
          let&apos;s work
        </h1>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
          <p
            ref={descTextRef}
            className="text-lg lg:text-2xl max-w-xl text-center"
          >
            What do you think about embarking on a remarkable journey of
            creation together? WANT TO DISCUSS A NEW PROJECT?
          </p>

          <Link href="/contact" ref={btnRef}>
            <Button className="text-2xl p-7 uppercase rounded-3xl bg-white text-black hover:bg-white/70">
              contact me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
