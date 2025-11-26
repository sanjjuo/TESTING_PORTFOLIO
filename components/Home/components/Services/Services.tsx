"use client";
import { useServicesGsap } from "./Animations/useServicesGsap";
import { services } from "./data";

export const Services = () => {
  const { headingRef, sectionRef } = useServicesGsap();
  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20"
    >
      <h1 ref={headingRef} className="text-heading overflow-hidden">
        My Services
      </h1>

      <div className="flex-1 w-full space-y-10">
        {services.map((data) => (
          <div key={data.id} className="services-items overflow-hidden">
            <div>
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
