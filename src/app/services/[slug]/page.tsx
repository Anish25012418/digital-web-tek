import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/constants";
import { ServiceDetailContent } from "./service-detail-content";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};

    return {
        title: service.title,
        description: service.description,
        openGraph: {
            title: `${service.title} | Digital Web Tek`,
            description: service.description,
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    return <ServiceDetailContent service={service} />;
}
