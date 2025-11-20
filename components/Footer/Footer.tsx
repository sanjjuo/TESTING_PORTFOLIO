import Link from "next/link";
import { footerData } from "./data";

export const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0 py-5">
      <p>
        @edition {new Date().getFullYear()} • crafted & coded by Mohamed Sanjeed
      </p>
      <ul className="flex items-center gap-7">
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
    </section>
  );
};
