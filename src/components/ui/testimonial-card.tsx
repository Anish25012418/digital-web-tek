"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    index?: number;
}

export function TestimonialCard({ name, role, content, index = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <Quote size={32} className="mb-4 text-primary/20" />
                <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground italic">
                    &ldquo;{content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="text-xs text-muted-foreground">{role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
