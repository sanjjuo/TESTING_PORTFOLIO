import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long"),
});
