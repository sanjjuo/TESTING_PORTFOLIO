import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import React from "react";
import { buttonGroupDataTypes } from "../../types";
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
        const Icon = data.name as React.ElementType; // if it's an icon component
        return (
          <Button
            key={data.id}
            variant="ghost"
            className={cn(
              category === data.value ? "text-white" : "text-muted-foreground",
              "underline underline-offset-2 text-base capitalize transition transform ease-in-out duration-500 p-1 hover:bg-transparent hover:text-white"
            )}
            onClick={() => action(data.value)}
          >
            {typeof data.name === "string" ? (
              data.name
            ) : (
              <Icon className="!size-6" />
            )}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
