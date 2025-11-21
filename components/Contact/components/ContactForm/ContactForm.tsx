"use client";
import { Form } from "@/components/ui/form";
import { FormInput } from "./components/FormInput";
import { useContactFormFunction } from "./Services/Functions/useContactFormFunction";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  const { form, handleContactForm } = useContactFormFunction();
  return (
    <section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleContactForm)}
          action=""
          className="space-y-8"
        >
          <FormInput
            form={form}
            number="01"
            name="fullName"
            label="what's your name"
            placeholder="full name"
            variant="normal"
          />
          <FormInput
            form={form}
            number="02"
            name="email"
            label="what's your email"
            placeholder="email address"
            variant="normal"
          />
          <FormInput
            form={form}
            number="03"
            name="message"
            label="what's your message"
            placeholder="your message"
            variant="textarea"
          />
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="bg-white text-background uppercase text-2xl font-bold px-5 py-8 rounded-full w-60 hover:bg-white/80"
            >
              send request
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
