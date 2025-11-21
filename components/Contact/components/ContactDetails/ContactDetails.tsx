"use client";
import React from "react";
import { footerData } from "@/components/Footer/data";
import Link from "next/link";

export const ContactDetails = () => {
  const [dubaiTime, setDubaiTime] = React.useState("");

  React.useEffect(() => {
    const update = () => {
      const now = new Date();

      // Format date (DD/MM/YYYY)
      const date = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dubai",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(now);

      // Format time (12-hour)
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      setDubaiTime(`${date} • ${time}`);
    };

    update(); // initial run
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-muted-foreground uppercase text-xl font-semibold">
          contact details
        </h1>
        <ul className="text-lg">
          <li>+971 544772940</li>
          <li>sanjeedofficial22@gmail.com</li>
          <li>Location: Dubai</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="text-muted-foreground uppercase text-xl font-semibold">
          Socials
        </h1>
        <ul className="text-lg">
          {footerData.map((data) => (
            <Link
              key={data.id}
              href={data.href}
              className="underline underline-offset-2"
            >
              <li>{data.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="text-muted-foreground capitalize text-xl font-semibold">
          Time zone, Dubai, UAE
        </h1>
        <p className="text-lg">{dubaiTime}</p>
      </div>
    </section>
  );
};
