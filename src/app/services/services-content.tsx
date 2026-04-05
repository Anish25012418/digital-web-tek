"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { CTASection } from "@/components/ui/cta-section";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { services, processSteps } from "@/lib/constants";

export function ServicesContent() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <MotionWrapper variant="fadeUp">
                        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                            Our Services
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Everything You Need to{" "}
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                Dominate Digital
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg">
                            From pixel-perfect designs to enterprise-grade software — we provide the full
                            spectrum of digital services under one roof.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* ── Service Cards Grid ── */}
            <section className="py-15">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, i) => (
                            <ServiceCard key={service.slug} {...service} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process / Workflow ── */}
            <section className="bg-card/50 py-15">
                <div className="mx-auto max-w-5xl px-6">
                    <SectionHeading
                        badge="Our Process"
                        title="How We Work"
                        subtitle="A proven five-step workflow that takes you from idea to launch — and beyond."
                    />
                    <div className="mt-16 space-y-0">
                        {processSteps.map((step, i) => (
                            <MotionWrapper key={step.step} variant="fadeUp" delay={i * 0.1}>
                                <div className="relative flex gap-6 pb-12 last:pb-0">
                                    {i < processSteps.length - 1 && (
                                        <div className="absolute left-6 top-14 h-full w-px bg-border" />
                                    )}
                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                                        {step.step}
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-lg font-semibold">{step.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
