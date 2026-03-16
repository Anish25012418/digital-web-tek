/* ─── Site-wide constants ─── */

export const siteConfig = {
    name: "Digital Web Tek",
    tagline: "Engineering Digital Excellence",
    description:
        "Digital Web Tek crafts stunning websites, powerful web & mobile applications, and data-driven SEO strategies that elevate brands and drive measurable growth.",
    url: "https://digitalwebtek.com",
    ogImage: "/og-image.png",
    links: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
    },
    adminEmail: "admin@digitalwebtek.com",
};

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/our-work" },
    { label: "Contact", href: "/contact" },
] as const;

export const services = [
    {
        title: "Website Development",
        slug: "website-development",
        icon: "Globe",
        short: "Custom, performance-optimised websites that convert visitors into customers.",
        description:
            "From single-page landing sites to enterprise content platforms, we build pixel-perfect, lightning-fast websites on modern frameworks so every visit counts.",
    },
    {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        icon: "Palette",
        short: "Research-led interfaces that delight users and drive engagement.",
        description:
            "We blend user research, wireframing, and high-fidelity prototyping to craft intuitive experiences that keep your audience coming back.",
    },
    {
        title: "Web Applications",
        slug: "web-applications",
        icon: "AppWindow",
        short: "Scalable SaaS products and internal tools engineered for growth.",
        description:
            "Leveraging React, Next.js, Node and cloud-native architectures, we build robust web apps that handle millions of interactions.",
    },
    {
        title: "Mobile Applications",
        slug: "mobile-applications",
        icon: "Smartphone",
        short: "Native-quality iOS & Android apps from a single codebase.",
        description:
            "Using React Native and Flutter, we deliver cross-platform mobile experiences with native performance, offline support, and push notifications.",
    },
    {
        title: "SEO Optimisation",
        slug: "seo-optimisation",
        icon: "Search",
        short: "Data-driven strategies that put you on page one — and keep you there.",
        description:
            "Technical audits, keyword research, on-page optimisation, and authoritative link-building work together to grow your organic traffic month over month.",
    },
    {
        title: "Software Development",
        slug: "software-development",
        icon: "Code2",
        short: "Bespoke software solutions tailored to your unique processes.",
        description:
            "From CRMs to ERPs, we architect, develop, and maintain custom software that automates workflows, reduces costs, and scales with your business.",
    },
    {
        title: "Web Hosting",
        slug: "web-hosting",
        icon: "Server",
        short: "Managed cloud hosting with 99.99% uptime and 24/7 monitoring.",
        description:
            "We provision, optimise, and monitor your infrastructure on AWS, GCP, or Azure so you can focus on your business while we handle the ops.",
    },
] as const;

export const teamMembers = [
    { name: "Alex Rivera", role: "CEO & Founder", image: "/team/member-1.jpg" },
    { name: "Sarah Chen", role: "CTO", image: "/team/member-2.jpg" },
    { name: "Marcus Lee", role: "Lead Designer", image: "/team/member-3.jpg" },
    { name: "Priya Sharma", role: "Project Manager", image: "/team/member-4.jpg" },
];

export const testimonials = [
    {
        name: "James Whitfield",
        role: "CEO, BrightEdge Solutions",
        content:
            "Digital Web Tek transformed our outdated platform into a sleek, modern web app. Their attention to detail and commitment to deadlines is unmatched.",
        avatar: "/testimonials/avatar-1.jpg",
    },
    {
        name: "Mira Patel",
        role: "Marketing Director, NovaCraft",
        content:
            "Our organic traffic grew 240% within six months of working with their SEO team. They truly understand what it takes to rank and convert.",
        avatar: "/testimonials/avatar-2.jpg",
    },
    {
        name: "David Okonkwo",
        role: "Founder, SparkLoop",
        content:
            "From concept to launch in eight weeks — the mobile app they built exceeded every expectation. Their team communicates transparently and delivers fast.",
        avatar: "/testimonials/avatar-3.jpg",
    },
];

export const projects = [
    {
        title: "BrightEdge Platform",
        category: "Web Application",
        image: "/projects/project-1.jpg",
        description: "A comprehensive SaaS analytics dashboard serving 50k+ users with real-time data visualizations and AI-powered insights.",
    },
    {
        title: "NovaCraft E-Commerce",
        category: "Website Development",
        image: "/projects/project-2.jpg",
        description: "High-conversion e-commerce platform with custom product configurator, achieving a 35% increase in average order value.",
    },
    {
        title: "SparkLoop Mobile",
        category: "Mobile Application",
        image: "/projects/project-3.jpg",
        description: "Cross-platform referral and loyalty app with push notifications, QR scanning, and seamless payment integration.",
    },
    {
        title: "Zenith Health Portal",
        category: "UI/UX Design",
        image: "/projects/project-4.jpg",
        description: "Patient-centric health portal redesign that reduced appointment booking time by 60% and improved NPS by 40 points.",
    },
    {
        title: "CloudNine Hosting",
        category: "Software Development",
        image: "/projects/project-5.jpg",
        description: "Automated server provisioning and monitoring dashboard handling 2,000+ managed instances with 99.99% uptime.",
    },
    {
        title: "Elevate SEO Campaign",
        category: "SEO Optimisation",
        image: "/projects/project-6.jpg",
        description: "Comprehensive SEO strategy that drove a B2B client from page 5 to position 1 for 12 high-value keywords in 4 months.",
    },
];

export const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "15+", label: "Team Members" },
    { value: "99.9%", label: "Client Satisfaction" },
];

export const processSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "We dive deep into your business goals, audience, and competitive landscape to define a clear project roadmap.",
    },
    {
        step: "02",
        title: "Strategy & Design",
        description: "Our designers create wireframes and high-fidelity prototypes, iterating with you until every pixel is perfect.",
    },
    {
        step: "03",
        title: "Development",
        description: "Agile sprints, clean code, and continuous integration ensure a robust, scalable product delivered on time.",
    },
    {
        step: "04",
        title: "Testing & QA",
        description: "Rigorous cross-browser, performance, and accessibility testing guarantees a flawless launch experience.",
    },
    {
        step: "05",
        title: "Launch & Support",
        description: "We handle deployment, monitor performance, and provide ongoing maintenance so you can focus on growth.",
    },
];

export const coreValues = [
    { title: "Innovation", icon: "Lightbulb", description: "We stay ahead of technology curves to deliver future-ready solutions." },
    { title: "Quality", icon: "Shield", description: "Every line of code and pixel of design is held to the highest standards." },
    { title: "Transparency", icon: "Eye", description: "Open communication and honest timelines build lasting partnerships." },
    { title: "Client Focus", icon: "Heart", description: "Your success is our success — we measure ourselves by your outcomes." },
];
