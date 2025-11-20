import { services } from "./data";

export const Services = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20 h-screen ">
      <h1 className="text-heading">My Services</h1>

      <div className="flex-1 w-full space-y-10">
        {services.map((data) => (
          <div key={data.id} className="space-y-3">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
