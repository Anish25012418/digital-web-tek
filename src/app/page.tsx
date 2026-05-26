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
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* ═══════════ Hero ═══════════ */}
      <section className="relative flex min-h-[90vh] md:min-h-screen items-center justify-center overflow-hidden bg-[#1c2237] -mt-[72px] pt-[72px]">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a3352] via-[#1c2237] to-[#151929]" />

        {/* Glowing orbs */}
        <div className="absolute right-[20%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#9f7aea]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[300px] w-[300px] rounded-full bg-[#4fd1c5]/10 blur-[100px]" />

        {/* Floating Element 1: Browser Window (Top Left) */}
        {/* <motion.div
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-[15%] md:left-[5%] top-[10%] md:top-[15%] w-48 md:w-64 opacity-50 rotate-[-15deg] pointer-events-none"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="#4fd1c5" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <ellipse cx="100" cy="100" rx="90" ry="30" stroke="#9f7aea" strokeWidth="1" opacity="0.6" transform="rotate(45 100 100)" />
            <ellipse cx="100" cy="100" rx="90" ry="30" stroke="#f687b3" strokeWidth="1" opacity="0.6" transform="rotate(-45 100 100)" />
            <circle cx="100" cy="100" r="8" fill="#4fd1c5" opacity="0.8" />
          </svg>
        </motion.div> */}

        {/* Floating Element 2: Mobile Phone (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute left-[15%] md:left-[15%] top-[40%] md:top-[25%] w-32 md:w-40 opacity-60 rotate-[15deg] pointer-events-none"
        >
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
            <rect x="0" y="0" width="100" height="200" rx="20" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
            <rect x="5" y="5" width="90" height="190" rx="15" fill="#ffffff" fillOpacity="0.05" />
            <rect x="35" y="10" width="30" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
            {/* Code Brackets */}
            <path d="M35 85L20 100L35 115" stroke="#9f7aea" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M65 85L80 100L65 115" stroke="#9f7aea" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M55 75L45 125" stroke="#f687b3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute hidden md:block left-[5%] md:left-[15%] top-[55%] md:top-[65%] w-40 md:w-56 opacity-60 flex flex-col gap-8 pointer-events-none"
        >
          {/* Network Graph */}
          <div className="ml-10 rotate-[-45deg]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-30">
              <path d="M20 50L50 80L80 20M50 80L90 70" stroke="#4fd1c5" strokeWidth="2" strokeOpacity="0.5" />
              <circle cx="20" cy="50" r="5" fill="#9f7aea" />
              <circle cx="50" cy="80" r="5" fill="#4fd1c5" />
              <circle cx="80" cy="20" r="5" fill="#f687b3" />
              <circle cx="90" cy="70" r="5" fill="#9f7aea" />
            </svg>
          </div>
        </motion.div>

        {/* Floating Element 3: Wireframe Globe (Top Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="absolute right-[5%] md:right-[10%] bottom-[8%] md:top-[25%] md:bottom-auto w-40 md:w-56 opacity-50 pointer-events-none"
        >
          <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
            <rect x="0" y="0" width="200" height="150" rx="10" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
            <path d="M0 10C0 4.477 4.477 0 10 0H190C195.523 0 200 4.477 200 10V30H0V10Z" fill="#ffffff" fillOpacity="0.1" />
            <circle cx="20" cy="15" r="4" fill="#f56565" />
            <circle cx="35" cy="15" r="4" fill="#ecc94b" />
            <circle cx="50" cy="15" r="4" fill="#48bb78" />
            <rect x="20" y="50" width="120" height="4" rx="2" fill="#4fd1c5" fillOpacity="0.8" />
            <rect x="20" y="65" width="160" height="4" rx="2" fill="#9f7aea" fillOpacity="0.8" />
            <rect x="20" y="80" width="140" height="4" rx="2" fill="#f687b3" fillOpacity="0.8" />
          </svg>
        </motion.div>

        {/* Floating Element 4: Bar Chart & Network (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute hidden md:block right-[5%] md:right-[10%] bottom-[10%] md:bottom-[25%] w-40 md:w-56 opacity-60 flex flex-col gap-8 pointer-events-none"
        >
          {/* Bar Chart */}
          <div className="rotate-[10deg]">
            <svg viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-20 md:w-32 md:h-24">
              <rect x="10" y="50" width="20" height="40" rx="4" fill="#9f7aea" fillOpacity="0.8" />
              <rect x="40" y="30" width="20" height="60" rx="4" fill="#f687b3" fillOpacity="0.8" />
              <rect x="70" y="10" width="20" height="80" rx="4" fill="#4fd1c5" fillOpacity="0.8" />
              <rect x="100" y="40" width="20" height="50" rx="4" fill="#667eea" fillOpacity="0.8" />
            </svg>
          </div>
        </motion.div>

        {/* Small decorative stars/clouds */}
        <div className="absolute top-[30%] left-[25%] w-2 h-2 rounded-full bg-white/20 pointer-events-none" />
        <div className="absolute top-[15%] right-[30%] w-3 h-3 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute bottom-[30%] left-[40%] w-1.5 h-1.5 rounded-full bg-white/20 pointer-events-none" />

        {/* Tiny Cloud SVG */}
        <div className="absolute bottom-[35%] right-[25%] opacity-20 pointer-events-none">
          <svg width="40" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 text-center mt-[-40px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white"
          >
            We Build Digital{" "}
            <span className="bg-gradient-to-r from-[#b379ff] to-[#ff8c42] bg-clip-text text-transparent">
              Experiences
            </span>
            <br />
            That Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-300"
          >
            From stunning websites to powerful applications, we craft bespoke digital solutions
            that help startups and enterprises{" "}
            <span className="text-white font-medium">grow, engage, and lead</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="2xl" className="w-full md:w-1/3 rounded-full px-8 text-sm font-semibold bg-gradient-to-r from-[#d946ef] to-[#ec4899] hover:from-[#c026d3] hover:to-[#db2777] text-white border-0 transition-transform hover:scale-105">
              <Link href="/contact" className="group">
                Get a Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="2xl"
              className="w-full md:w-1/3 rounded-full px-8 text-sm font-semibold border-white/20 text-white hover:bg-white/10 bg-transparent transition-transform hover:scale-105"
            >
              <Link href="/our-work">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Stats ═══════════ */}
      {/* <section className="border-y border-border bg-card/50">
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
      </section> */}

      {/* ═══════════ Services Preview ═══════════ */}
      <section className="bg-[#E6E6FA] dark:bg-transparent py-15">
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
      <section className="bg-card/50 py-15">
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
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/img_1.png"
                  alt="Logo"
                  fill
                />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-7xl font-extrabold text-primary/20">DWT</p>
                    <p className="mt-2 text-sm text-muted-foreground">Digital Web Tek</p>
                  </div>
                </div> */}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════════ Featured Projects ═══════════ */}
      <section className="bg-[#E6E6FA] dark:bg-transparent py-15">
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
      <section className="bg-card/50 py-15">
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
