"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/animations/motion-wrapper";

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
}

export function CTASection({
    title = "Ready to Build Something Exceptional?",
    subtitle = "Let's transform your vision into a digital reality. Get in touch for a free consultation and project quote.",
    buttonText = "Get a Free Quote",
    buttonHref = "/contact",
}: CTASectionProps) {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />

            <div className="relative mx-auto max-w-4xl px-6 text-center">
                <MotionWrapper variant="fadeUp">
                    <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                        {title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 lg:text-lg">
                        {subtitle}
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="rounded-full px-8 text-base font-semibold"
                        >
                            <Link href={buttonHref} className="group">
                                {buttonText}
                                <ArrowRight
                                    size={18}
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </Button>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
