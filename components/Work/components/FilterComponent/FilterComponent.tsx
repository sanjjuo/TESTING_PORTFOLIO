import { workData } from "@/components/common/Projects/data";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { cn } from "@/lib/utils";

interface FilterComponentProps {
  category: string;
  action: (value: string) => void;
  content: buttonGroupDataTypes[];
}

export const FilterComponent = ({
  category,
  action,
  content,
}: FilterComponentProps) => {
  return (
    <ButtonGroup className="space-x-4">
      {content.map((data) => {
        //count of each category
        const count = workData.filter(
          (item) => item.category === data.value
        ).length;
        return (
          <Button
            key={data.id}
            variant="ghost"
            className={cn(
              category === data.value ? "text-white" : "text-muted-foreground",
              "underline underline-offset-2 text-base capitalize transition transform ease-in-out duration-500 p-1 hover:bg-transparent hover:text-muted-foreground"
            )}
            onClick={() => action(data.value)}
          >
            {data.name} ({data.value === "all" ? workData.length : count})
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
