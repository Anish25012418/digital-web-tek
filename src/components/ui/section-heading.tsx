"use client";

import { MotionWrapper } from "@/components/animations/motion-wrapper";

interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    badge,
    title,
    subtitle,
    align = "center",
}: SectionHeadingProps) {
    return (
        <MotionWrapper variant="fadeUp" className={align === "center" ? "text-center" : "text-left"}>
            {badge && (
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
            {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {subtitle}
                </p>
            )}
        </MotionWrapper>
    );
}
