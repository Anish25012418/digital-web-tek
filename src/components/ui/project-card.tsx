"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    description: string;
    index?: number;
    onClick?: () => void;
}

export function ProjectCard({
    title,
    category,
    description,
    index = 0,
    image,
    onClick,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={onClick}
            className="group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Project Image Placeholder */}
                <div className="relative aspect-[20/10] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src={image}
                            alt="Logo"
                            fill
                        />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="px-6 py-1">
                            <p className="text-sm text-white/90">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {category}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                </div>
            </div>
        </motion.div>
    );
}
