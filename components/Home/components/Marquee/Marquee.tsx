import { ScrollVelocity } from "@/components/Reactbits/ScrollVelocity";

export const Marquee = () => {
  return (
    <section className="px-0">
      <ScrollVelocity
        texts={["Code. Create. Conquer. •", "Pixels with purpose. •"]}
        velocity={40}
        numCopies={6}
      />
    </section>
  );
};
