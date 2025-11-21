import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";

interface formInputProps {
  number: string;
  form: UseFormReturn<contactFormTypes>;
  name: keyof contactFormTypes;
  label: string;
  placeholder: string;
  variant: "normal" | "textarea";
}

export const FormInput = ({
  number,
  form,
  label,
  name,
  placeholder,
  variant,
}: formInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="flex items-start gap-2 lg:gap-10">
          <span className="text-2xl font-bold text-muted-foreground">
            {number}
          </span>
          <FormItem className="flex-1">
            <FormLabel className="uppercase text-2xl font-bold">
              {label}
            </FormLabel>
            <FormControl>
              {variant === "normal" ? (
                <Input
                  {...field}
                  placeholder={placeholder}
                  className={cn(
                    "border-0 border-b-2 rounded-none w-full h-20 focus:!ring-0 !text-xl p-0",
                    "placeholder:capitalize placeholder:text-xl placeholder:font-semibold placeholder:text-muted-foreground"
                  )}
                />
              ) : (
                <Textarea
                  {...field}
                  placeholder={placeholder}
                  className={cn(
                    "border-0 border-b-2 rounded-none w-full h-40 focus:!ring-0 !text-xl p-0",
                    "placeholder:capitalize placeholder:text-xl placeholder:font-semibold placeholder:text-muted-foreground"
                  )}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
};
