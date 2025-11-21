"use client";
import React from "react";
import { Tabs } from "../ui/tabs";
import { FilterComponent } from "./components/FilterComponent/FilterComponent";
import { TabContent } from "./components/TabContent/TabContent";
import { TabHeader } from "./components/TabHeader/TabHeader";
import { buttonGroupData } from "./data";

export const Work = () => {
  const [category, setCategory] = React.useState("all");
  return (
    <div className="app_width mt-20 lg:mt-10">
      <section>
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between w-full space-y-3 lg:space-y-0">
            <TabHeader />
            <FilterComponent
              category={category}
              action={setCategory}
              content={buttonGroupData}
            />
          </div>
          <TabContent category={category} />
        </Tabs>
      </section>
    </div>
  );
};
