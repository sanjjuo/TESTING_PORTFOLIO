import Link from "next/link";
import { technologiesData } from "./data";

export const Technologies = () => {
  return (
    <section>
      <h1
        style={{
          fontFamily: "var(--font-humane)",
        }}
        className="text-9xl font-bold text-center"
      >
        Technologies
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-10 mt-10">
        {technologiesData.map((data) => (
          <Link
            href={data.href}
            key={data.id}
            className="flex flex-col items-center justify-center space-y-1"
          >
            <data.icon className="w-28 h-28" />
            <p>{data.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
