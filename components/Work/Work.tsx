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
    <section className="space-y-5">
      <Tabs defaultValue="grid" className="w-full">
        <div className="flex items-center justify-between w-full">
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
  );
};
