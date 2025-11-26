import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mohamed Sanjeed - Work",
};
const WorkLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default WorkLayout;
