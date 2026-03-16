import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(7, "Please enter a valid phone number"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    projectType: z.string().min(1, "Please select a project type"),
    budget: z.string().min(1, "Please select a budget range"),
    timeline: z.string().min(1, "Please select a timeline"),
    description: z.string().min(10, "Description must be at least 10 characters"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
