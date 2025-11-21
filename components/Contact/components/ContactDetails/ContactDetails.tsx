"use client";
import { footerData } from "@/components/Footer/data";
import Link from "next/link";
import { useContactDetailsFunction } from "./Function/useContactDetailsFunction";

export const ContactDetails = () => {
  const { dubaiTime } = useContactDetailsFunction();
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
