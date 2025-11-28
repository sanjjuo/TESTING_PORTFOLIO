import { LetsWork } from "../common/LetsWork/LetsWork";
import { workData } from "../common/Projects/data";
import { AboutWork } from "./components/AboutWork/AboutWork";
import { TitleAndDetails } from "./components/TitleAndDetails/TitleAndDetails";
import { WorkImageSlider } from "./components/WorkImageSlider/WorkImageSlider";

export const WorkDetails = ({ slug }: { slug: string }) => {
  const workDetails = workData.find((item) => item.slug === slug);

  if (!workDetails) {
    return <p>Work not found</p>;
  }
  return (
    <section className="app_width">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 h-screen py-20 lg:py-10">
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
          <WorkImageSlider
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
      </div>
      <LetsWork />
    </section>
  );
};
