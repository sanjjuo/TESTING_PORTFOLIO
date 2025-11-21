import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../Schema/useContactFormSchema";

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
  };

  return { form, handleContactForm };
};
