import { Projects } from "@/components/common/Projects/Projects";
import { TabsContent } from "@/components/ui/tabs";
import { ListWork } from "../ListWork/ListWork";

export const TabContent = ({ category }: { category: string }) => {
  return (
    <div>
      <TabsContent value="list">
        <ListWork category={category} />
      </TabsContent>
      <TabsContent value="grid">
        <Projects category={category} />
      </TabsContent>
    </div>
  );
};
