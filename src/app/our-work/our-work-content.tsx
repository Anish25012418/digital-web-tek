"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { CTASection } from "@/components/ui/cta-section";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { projects } from "@/lib/constants";
import Image from "next/image";

const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
];

export function OurWorkContent() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    const filtered =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <MotionWrapper variant="fadeUp">
                        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                            Portfolio
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Projects That{" "}
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                Speak for Themselves
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg">
                            A curated selection of our recent work across industries and platforms.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* ── Filter Tabs ── */}
            <section className="pb-8">
                <div className="mx-auto max-w-7xl px-6">
                    <MotionWrapper variant="fadeUp" delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeCategory === cat
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-card text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            {/* ── Project Grid ── */}
            <section className="py-12 lg:py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        layout
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard
                                        {...project}
                                        index={i}
                                        onClick={() => setSelectedProject(project)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* ── Case Study Modal ── */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-card border border-border shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header image area */}
                            <div className="relative aspect-[4/2] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src={selectedProject.image}
                                        alt={`Logo${selectedProject.title}`}
                                        fill
                                    />
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="p-8">
                                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    {selectedProject.category}
                                </span>
                                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                                <p className="mt-4 leading-relaxed text-muted-foreground">
                                    {selectedProject.description}
                                </p>
                                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                                    {[
                                        { label: "Duration", value: selectedProject.duration },
                                        { label: "Tech Stack", value: selectedProject.tech_stack },
                                    ].map((item) => (
                                        <div key={item.label} className="rounded-xl bg-muted/50 p-3">
                                            <p className="text-lg font-bold text-primary">{item.value}</p>
                                            <p className="text-xs text-muted-foreground">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CTASection />
        </>
    );
}
