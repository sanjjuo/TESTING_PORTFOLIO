import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";

export const TabHeader = () => {
  return (
    <TabsList className="bg-transparent space-x-1">
      <TabsTrigger
        value="list"
        className="border-2 border-transparent data-[state=active]:border-2 data-[state=active]:border-white rounded-none transition transform ease-in-out duration-500 p-1"
      >
        <List />
      </TabsTrigger>
      <TabsTrigger
        value="grid"
        className="border-2 border-transparent data-[state=active]:border-2 data-[state=active]:border-white rounded-none transition transform ease-in-out duration-500 p-1"
      >
        <LayoutGrid />
      </TabsTrigger>
    </TabsList>
  );
};
