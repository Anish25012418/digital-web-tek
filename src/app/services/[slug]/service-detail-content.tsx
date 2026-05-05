"use client";

import Link from "next/link";
import {
    Globe,
    Palette,
    AppWindow,
    Smartphone,
    Search,
    Code2,
    Server,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { CTASection } from "@/components/ui/cta-section";
import { services } from "@/lib/constants";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
    Globe,
    Palette,
    AppWindow,
    Smartphone,
    Search,
    Code2,
    Server,
};

type Service = (typeof services)[number];

interface ServiceDetailContentProps {
    service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
    const Icon = iconMap[service.icon] ?? Globe;

    // Find adjacent services for navigation
    const currentIndex = services.findIndex((s) => s.slug === service.slug);
    const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
    const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

    // Get other services for the grid (exclude current)
    const otherServices = services.filter((s) => s.slug !== service.slug);

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(var(--primary-rgb,124,58,237),0.08),transparent)]" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <MotionWrapper variant="fadeUp">
                        <Link
                            href="/services"
                            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            <ArrowLeft
                                size={14}
                                className="transition-transform group-hover:-translate-x-1"
                            />
                            All Services
                        </Link>
                    </MotionWrapper>

                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <MotionWrapper variant="fadeLeft">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#f9d5fc]">
                                <Image
                                    src={service.image}
                                    alt={`Logo${service.title}`}
                                    fill
                                />
                            </div>
                        </MotionWrapper>
                        <div className="text-left">
                            <MotionWrapper variant="fadeUp" delay={0.05}>
                                <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                                    <Icon size={36} strokeWidth={1.6} />
                                </div>
                            </MotionWrapper>

                            <MotionWrapper variant="fadeUp" delay={0.1}>
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    {service.title}
                                </h1>
                            </MotionWrapper>

                            <MotionWrapper variant="fadeUp" delay={0.15}>
                                <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg leading-relaxed">
                                    {service.description}
                                </p>
                            </MotionWrapper>

                            <MotionWrapper variant="fadeUp" delay={0.2}>
                                <div className="mt-8">
                                    <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold">
                                        <Link href="/contact" className="group">
                                            Get Started
                                            <ArrowRight
                                                size={18}
                                                className="ml-2 transition-transform group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </Button>
                                </div>
                            </MotionWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── About This Service ── */}
            <section className="py-15">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <MotionWrapper variant="fadeUp">
                            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mt-8">
                                Overview
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                What We Deliver
                            </h2>
                            <p className="mt-5 leading-relaxed text-muted-foreground">
                                {service.longDescription}
                            </p>
                        </MotionWrapper>

                        <MotionWrapper variant="fadeUp" delay={0.1}>
                            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-1">
                                <div className="rounded-xl bg-card/80 p-8 backdrop-blur-sm">
                                    <h3 className="mb-6 text-lg font-semibold">Key Capabilities</h3>
                                    <ul className="space-y-4">
                                        {service.features.map((feature, i) => (
                                            <motion.li
                                                key={feature}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    className="mt-0.5 shrink-0 text-primary"
                                                />
                                                <span className="text-sm leading-relaxed">
                                                    {feature}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="bg-card/50 py-15">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <MotionWrapper variant="fadeUp">
                        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                            Why Us
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Why Choose Digital Web Tek
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            We combine deep technical expertise with a relentless focus on your business outcomes.
                        </p>
                    </MotionWrapper>

                    <div className="mt-14 grid gap-6 sm:grid-cols-3">
                        {[
                            {
                                title: "Expert Team",
                                desc: "Seasoned developers, designers, and strategists who have delivered 200+ projects across industries.",
                            },
                            {
                                title: "Transparent Process",
                                desc: "Agile sprints, regular demos, and open communication keep you in control every step of the way.",
                            },
                            {
                                title: "Results-Driven",
                                desc: "Every decision we make is aligned to your KPIs higher conversions, faster load times, more organic traffic.",
                            },
                        ].map((item, i) => (
                            <MotionWrapper key={item.title} variant="fadeUp" delay={i * 0.1}>
                                <div className="rounded-2xl border border-border bg-card p-8 text-left transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Prev / Next Navigation ── */}
            {(prevService || nextService) && (
                <section className="py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex items-stretch gap-4">
                            {prevService ? (
                                <Link
                                    href={`/services/${prevService.slug}`}
                                    className="group flex flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <ArrowLeft
                                        size={20}
                                        className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-primary"
                                    />
                                    <div className="min-w-0">
                                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                            Previous
                                        </span>
                                        <p className="mt-0.5 truncate text-sm font-semibold">
                                            {prevService.title}
                                        </p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}

                            {nextService ? (
                                <Link
                                    href={`/services/${nextService.slug}`}
                                    className="group flex flex-1 items-center justify-end gap-4 rounded-2xl border border-border bg-card p-6 text-right transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="min-w-0">
                                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                            Next
                                        </span>
                                        <p className="mt-0.5 truncate text-sm font-semibold">
                                            {nextService.title}
                                        </p>
                                    </div>
                                    <ArrowRight
                                        size={20}
                                        className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                                    />
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Other Services ── */}
            <section className="bg-card/50 py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <MotionWrapper variant="fadeUp">
                        <div className="text-center">
                            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                                Explore More
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Other Services
                            </h2>
                        </div>
                    </MotionWrapper>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {otherServices.map((s, i) => {
                            const OtherIcon = iconMap[s.icon] ?? Globe;
                            return (
                                <motion.div
                                    key={s.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                >
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="group block h-full"
                                    >
                                        <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-[2.5]" />
                                            <div className="relative flex items-start gap-4">
                                                <div className="inline-flex shrink-0 rounded-xl bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                                    <OtherIcon size={20} strokeWidth={1.8} />
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-base font-semibold tracking-tight">
                                                        {s.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                                                        {s.short}
                                                    </p>
                                                </div>
                                                <ArrowRight
                                                    size={16}
                                                    className="mt-1 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
