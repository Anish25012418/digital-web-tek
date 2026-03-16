"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import {
    contactFormSchema,
    quoteFormSchema,
    type ContactFormData,
    type QuoteFormData,
} from "@/lib/validations";
import { services } from "@/lib/constants";

export function ContactContent() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <MotionWrapper variant="fadeUp">
                        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                            Contact Us
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Let&apos;s Start Your{" "}
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                Next Project
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg">
                            Whether you have a question, want a free consultation, or are ready to kick off
                            — we&apos;d love to hear from you.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* ── Contact Info Cards ── */}
            <section className="pb-12">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-6 sm:grid-cols-3">
                        {[
                            { icon: Mail, label: "Email", value: "info@digitalwebtek.com" },
                            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                            { icon: MapPin, label: "Address", value: "123 Innovation Drive, Tech City" },
                        ].map((item, i) => (
                            <MotionWrapper key={item.label} variant="fadeUp" delay={i * 0.1}>
                                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">{item.label}</p>
                                        <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                                    </div>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Forms Grid ── */}
            <section className="py-12 lg:py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <MotionWrapper variant="fadeLeft">
                            <ContactForm />
                        </MotionWrapper>

                        {/* Quote Form */}
                        <MotionWrapper variant="fadeRight" delay={0.15}>
                            <QuoteForm />
                        </MotionWrapper>
                    </div>
                </div>
            </section>
        </>
    );
}

/* ═══════════════════════════════════════════════════════
   Contact Form
   ═══════════════════════════════════════════════════════ */
function ContactForm() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: "contact", ...data }),
            });
            if (!res.ok) throw new Error("Failed to send");
            toast.success("Message sent! We'll get back to you within 24 hours.");
            reset();
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and we&apos;ll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div>
                    <Input placeholder="Your Name" {...register("name")} />
                    {errors.name && (
                        <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <Input type="email" placeholder="Email Address" {...register("email")} />
                    {errors.email && (
                        <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <Input type="tel" placeholder="Phone Number" {...register("phone")} />
                    {errors.phone && (
                        <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
                    )}
                </div>
                <div>
                    <Select onValueChange={(v) => setValue("service", v)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Service Required" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map((s) => (
                                <SelectItem key={s.slug} value={s.title}>
                                    {s.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.service && (
                        <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>
                    )}
                </div>
                <div>
                    <Textarea placeholder="Your Message" rows={5} {...register("message")} />
                    {errors.message && (
                        <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                    )}
                </div>
                <Button type="submit" disabled={loading} className="w-full rounded-full">
                    {loading ? "Sending…" : "Send Message"}
                    <Send size={16} className="ml-2" />
                </Button>
            </form>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════
   Quote Form
   ═══════════════════════════════════════════════════════ */
function QuoteForm() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteFormSchema),
    });

    const onSubmit = async (data: QuoteFormData) => {
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: "quote", ...data }),
            });
            if (!res.ok) throw new Error("Failed to send");
            toast.success("Quote request received! We'll prepare your estimate shortly.");
            reset();
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h2 className="text-2xl font-bold">Get a Quotation</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your project and we&apos;ll send a detailed estimate.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div>
                    <Input placeholder="Your Name" {...register("name")} />
                    {errors.name && (
                        <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <Input type="email" placeholder="Email Address" {...register("email")} />
                    {errors.email && (
                        <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <Select onValueChange={(v) => setValue("projectType", v)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Project Type" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map((s) => (
                                <SelectItem key={s.slug} value={s.title}>
                                    {s.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.projectType && (
                        <p className="mt-1 text-xs text-destructive">{errors.projectType.message}</p>
                    )}
                </div>
                <div>
                    <Select onValueChange={(v) => setValue("budget", v)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Budget Range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-15k">$5,000 – $15,000</SelectItem>
                            <SelectItem value="15k-50k">$15,000 – $50,000</SelectItem>
                            <SelectItem value="50k-plus">$50,000+</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.budget && (
                        <p className="mt-1 text-xs text-destructive">{errors.budget.message}</p>
                    )}
                </div>
                <div>
                    <Select onValueChange={(v) => setValue("timeline", v)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Expected Timeline" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-3months">1 – 3 months</SelectItem>
                            <SelectItem value="3-6months">3 – 6 months</SelectItem>
                            <SelectItem value="6months-plus">6+ months</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.timeline && (
                        <p className="mt-1 text-xs text-destructive">{errors.timeline.message}</p>
                    )}
                </div>
                <div>
                    <Textarea
                        placeholder="Describe your project"
                        rows={5}
                        {...register("description")}
                    />
                    {errors.description && (
                        <p className="mt-1 text-xs text-destructive">{errors.description.message}</p>
                    )}
                </div>
                <Button type="submit" disabled={loading} className="w-full rounded-full">
                    {loading ? "Submitting…" : "Request Quote"}
                    <Send size={16} className="ml-2" />
                </Button>
            </form>
        </div>
    );
}
