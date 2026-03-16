import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Digital Web Tek's full suite of digital services — website development, UI/UX design, web & mobile applications, SEO, software development, and web hosting.",
    openGraph: {
        title: "Services | Digital Web Tek",
        description:
            "Explore Digital Web Tek's full suite of digital services — website development, UI/UX design, web & mobile applications, SEO, software development, and web hosting.",
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}
