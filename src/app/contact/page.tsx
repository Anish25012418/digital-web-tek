import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Digital Web Tek. Fill out our contact form or request a free project quote — we'll respond within 24 hours.",
    openGraph: {
        title: "Contact Us | Digital Web Tek",
        description:
            "Get in touch with Digital Web Tek. Fill out our contact form or request a free project quote.",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
