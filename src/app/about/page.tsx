import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Digital Web Tek — our story, mission, team, and the core values that drive everything we build.",
    openGraph: {
        title: "About Us | Digital Web Tek",
        description:
            "Learn about Digital Web Tek — our story, mission, team, and the core values that drive everything we build.",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
