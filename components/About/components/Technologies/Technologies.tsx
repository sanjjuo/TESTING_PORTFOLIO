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
          <div
            key={data.id}
            className="flex flex-col items-center justify-center"
          >
            <data.icon className="w-20 h-20" />
            {/* <Image src={data.icon} alt={data.name} width={50} height={50} /> */}
            <Link href={data.href}>{data.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};
