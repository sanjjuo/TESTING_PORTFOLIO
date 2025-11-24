import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../Schema/useContactFormSchema";
import { toast } from "sonner";

export const useContactFormFunction = () => {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const handleContactForm = (data: contactFormTypes) => {
    console.log(data);
    toast("Event has been created.");
  };

  return { form, handleContactForm };
};
