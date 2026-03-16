"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { ProjectCard } from "@/components/ui/project-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CTASection } from "@/components/ui/cta-section";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { services, projects, testimonials, stats, siteConfig } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ═══════════ Hero ═══════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
              🚀 {siteConfig.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Build Digital
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Experiences That Matter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl"
          >
            From stunning websites to powerful applications, we craft bespoke digital solutions
            that help startups & enterprises{" "}
            <span className="text-foreground font-medium">grow, engage, and lead</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold">
              <Link href="/contact" className="group">
                Get a Quote
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base font-semibold"
            >
              <Link href="/our-work">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Stats ═══════════ */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <MotionWrapper key={stat.label} variant="fadeUp" delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Services Preview ═══════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            badge="What We Do"
            title="Services Built for Growth"
            subtitle="End-to-end digital solutions, from concept and design through development, launch, and beyond."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} {...service} index={i} />
            ))}
          </div>
          <MotionWrapper variant="fadeUp" delay={0.3} className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/services">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </MotionWrapper>
        </div>
      </section>

      {/* ═══════════ Why Choose Us ═══════════ */}
      <section className="bg-card/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title="Trusted by Startups & Enterprises Alike"
                align="left"
              />
              <div className="mt-8 space-y-5">
                {[
                  "Proven track record with 200+ successful projects delivered",
                  "Agile development methodology for rapid, transparent delivery",
                  "Full-stack team of designers, developers, and strategists",
                  "Post-launch support and performance monitoring included",
                  "Transparent pricing — no hidden fees, no surprises",
                ].map((item, i) => (
                  <MotionWrapper key={i} variant="fadeLeft" delay={i * 0.08}>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
              <MotionWrapper variant="fadeUp" delay={0.4} className="mt-8">
                <Button asChild className="rounded-full px-8">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </MotionWrapper>
            </div>
            <MotionWrapper variant="fadeRight" delay={0.2}>
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-7xl font-extrabold text-primary/20">DWT</p>
                    <p className="mt-2 text-sm text-muted-foreground">Digital Web Tek</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════════ Featured Projects ═══════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            badge="Our Work"
            title="Featured Projects"
            subtitle="A selection of our recent work showcasing the breadth of what we build."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
          <MotionWrapper variant="fadeUp" delay={0.3} className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/our-work">
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </MotionWrapper>
        </div>
      </section>

      {/* ═══════════ Testimonials ═══════════ */}
      <section className="bg-card/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Hear from the teams and founders we've partnered with."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <CTASection />
    </>
  );
}
