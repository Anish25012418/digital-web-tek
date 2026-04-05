"use client";

import { Target, Eye, Lightbulb, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { teamMembers, coreValues, stats } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

const valueIconMap: Record<string, LucideIcon> = {
    Lightbulb,
    Shield,
    Eye,
    Heart,
};

export function AboutContent() {
    return (
        <>
            {/* ── Page Hero ── */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <MotionWrapper variant="fadeUp">
                        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                            About Us
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            The People Behind{" "}
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                Your Next Big Idea
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg">
                            We&apos;re a passionate team of designers, engineers, and strategists who believe
                            technology should be simple, beautiful, and impactful.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* ── Company Story ── */}
            <section className="py-15">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <MotionWrapper variant="fadeLeft">
                            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-[#f9d5fc]">
                                <Image
                                    src="/img_2.png"
                                    alt="Logo"
                                    fill
                                />
                            </div>
                        </MotionWrapper>
                        <div>
                            <MotionWrapper variant="fadeRight">
                                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                                    Our Story
                                </span>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    Born From a Passion for Exceptional Digital Craft
                                </h2>
                                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Digital Web Tek started with a simple belief: every business, no matter its
                                        size, deserves world-class digital products. What began as a small studio of
                                        three developers has evolved into a full-service digital agency trusted by
                                        startups, SMBs, and enterprises around the globe.
                                    </p>
                                    <p>
                                        Over the years, we&apos;ve delivered many projects across industries — from
                                        fintech dashboards and health-tech platforms to e-commerce powerhouses and
                                        mobile-first experiences. Our clients partner with us not just because we
                                        write great code, but because we genuinely care about their outcomes.
                                    </p>
                                </div>
                            </MotionWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ── */}
            <section className="bg-card/50 py-15">
                <div className="mx-auto max-w-5xl px-6">
                    <SectionHeading badge="Purpose" title="Mission & Vision" />
                    <div className="mt-14 grid gap-8 md:grid-cols-2">
                        {[
                            {
                                icon: Target,
                                title: "Our Mission",
                                text: "To empower businesses with innovative, accessible, and high-performance digital solutions that drive measurable growth and lasting competitive advantage.",
                            },
                            {
                                icon: Eye,
                                title: "Our Vision",
                                text: "To be the most trusted digital partner for ambitious organisations worldwide — known for quality, transparency, and the relentless pursuit of excellence.",
                            },
                        ].map((item, i) => (
                            <MotionWrapper key={item.title} variant="fadeUp" delay={i * 0.15}>
                                <div className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                                    <item.icon className="mb-4 h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {item.text}
                                    </p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            {/* <section className="border-y border-border">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, i) => (
                            <MotionWrapper key={stat.label} variant="scaleUp" delay={i * 0.1}>
                                <div className="text-center">
                                    <p className="text-3xl font-extrabold text-primary sm:text-4xl">{stat.value}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ── Team ── */}
            {/* <section className="py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        badge="Our Team"
                        title="Meet the Minds"
                        subtitle="A diverse team of creatives, engineers, and strategists united by a shared obsession with quality."
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                                    <div className="relative aspect-square bg-gradient-to-br from-primary/15 via-primary/5 to-accent/15">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-5xl font-bold text-primary/20">
                                                {member.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5 text-center">
                                        <h3 className="font-semibold">{member.name}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ── Core Values ── */}
            <section className="py-15">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        badge="Core Values"
                        title="What Guides Every Decision"
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {coreValues.map((value, i) => {
                            const Icon = valueIconMap[value.icon] ?? Lightbulb;
                            return (
                                <MotionWrapper key={value.title} variant="fadeUp" delay={i * 0.1}>
                                    <div className="rounded-2xl border border-border bg-card p-7 text-center transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="font-semibold">{value.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                                    </div>
                                </MotionWrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
