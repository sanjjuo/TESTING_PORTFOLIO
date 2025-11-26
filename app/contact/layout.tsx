import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mohamed Sanjeed - Contact",
};
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default ContactLayout;
