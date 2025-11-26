"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const GoBack = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/work")}
      className="flex items-center gap-1 cursor-pointer"
    >
      <ArrowLeft />
      <span className="font-semibold uppercase text-lg">back to work</span>
    </div>
  );
};
