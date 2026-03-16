import type { Metadata } from "next";
import { OurWorkContent } from "./our-work-content";

export const metadata: Metadata = {
    title: "Our Work",
    description:
        "Browse Digital Web Tek's portfolio — web apps, mobile apps, websites, SEO campaigns, and more. See the results we deliver.",
    openGraph: {
        title: "Our Work | Digital Web Tek",
        description:
            "Browse Digital Web Tek's portfolio — web apps, mobile apps, websites, SEO campaigns, and more.",
    },
};

export default function OurWorkPage() {
    return <OurWorkContent />;
}
