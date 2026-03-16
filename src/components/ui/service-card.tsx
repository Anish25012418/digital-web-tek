"use client";

import {
    Globe,
    Palette,
    AppWindow,
    Smartphone,
    Search,
    Code2,
    Server,
    type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
    Globe,
    Palette,
    AppWindow,
    Smartphone,
    Search,
    Code2,
    Server,
};

interface ServiceCardProps {
    title: string;
    icon: string;
    short: string;
    index?: number;
}

export function ServiceCard({ title, icon, short, index = 0 }: ServiceCardProps) {
    const Icon = iconMap[icon] ?? Globe;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <Link href="/services" className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    {/* Gradient glow on hover */}
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-[2.5]" />
                    <div className="relative">
                        <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3.5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon size={24} strokeWidth={1.8} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{short}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
