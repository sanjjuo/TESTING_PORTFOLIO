import localFont from "next/font/local";

export const Humane = localFont({
  src: [
    {
      path: "../public/fonts/Humane-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-humane",
  display: "swap",
});
