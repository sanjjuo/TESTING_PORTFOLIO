import { LetsWork } from "../common/LetsWork/LetsWork";
import { workData } from "../common/Projects/data";
import { AboutWork } from "./components/AboutWork/AboutWork";
import { TitleAndDetails } from "./components/TitleAndDetails/TitleAndDetails";
import { WorkImage } from "./components/WorkImage/WorkImage";

export const WorkDetails = ({ slug }: { slug: string }) => {
  const workDetails = workData.find((item) => item.slug === slug);

  if (!workDetails) {
    return <p>Work not found</p>;
  }
  return (
    <div className="app_width mt-20 lg:mt-10">
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-10 min-h-[900px] h-full">
        <div className="col-span-1 h-full">
          <TitleAndDetails
            title={workDetails?.name ?? ""}
            category={workDetails?.category ?? ""}
            technologies={workDetails?.technologies || []}
            completed={workDetails?.completed ?? ""}
            view={workDetails.github}
          />
        </div>
        <div className="lg:col-span-3 h-full">
          <WorkImage
            images={workDetails?.images || []}
            alt={workDetails.name}
          />
        </div>
        <div className="col-span-1 h-full">
          <AboutWork
            subdesc={workDetails.subDescription}
            description={workDetails.description}
          />
        </div>
      </section>
      <LetsWork />
    </div>
  );
};
