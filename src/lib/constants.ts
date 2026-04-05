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
        title: "Software Development",
        slug: "software-development",
        icon: "Code2",
        image: "/img_3.jpg",
        short: "Bespoke software solutions tailored to your unique processes.",
        description:
            "From CRMs to ERPs, we architect, develop, and maintain custom software that automates workflows, reduces costs, and scales with your business.",
        longDescription:
            "Our software development team specialises in building mission-critical applications that power your business operations. We follow industry best practices including agile methodology, continuous integration/deployment, and comprehensive testing to ensure every solution is reliable, secure, and maintainable. Whether you need a customer relationship management system, an enterprise resource planner, or a completely custom workflow tool, we design architectures that grow with your organisation.",
        features: [
            "Custom CRM & ERP Solutions",
            "API Development & Integration",
            "Legacy System Modernisation",
            "Cloud-Native Architecture",
            "Automated Testing & CI/CD",
            "Ongoing Maintenance & Support",
        ],
    },
    {
        title: "Web Applications",
        slug: "web-applications",
        icon: "AppWindow",
        image: "/img_4.jpg",
        short: "Scalable SaaS products and internal tools engineered for growth.",
        description:
            "Leveraging React, Next.js, Node and cloud-native architectures, we build robust web apps that handle millions of interactions.",
        longDescription:
            "We build high-performance web applications that handle complex business logic while delivering exceptional user experiences. Our tech stack includes React, Next.js, Node.js, and cloud-native services, ensuring your application is fast, scalable, and future-proof. From SaaS platforms to internal dashboards, every web app we deliver is built for real-world scale and reliability.",
        features: [
            "SaaS Product Development",
            "Real-Time Dashboards & Analytics",
            "Progressive Web Apps (PWA)",
            "Microservices Architecture",
            "Third-Party API Integration",
            "Role-Based Access Control",
        ],
    },
    {
        title: "Mobile Applications",
        slug: "mobile-applications",
        icon: "Smartphone",
        image: "/img_5.jpg",
        short: "Native-quality iOS & Android apps from a single codebase.",
        description:
            "Using React Native and Flutter, we deliver cross-platform mobile experiences with native performance, offline support, and push notifications.",
        longDescription:
            "Our mobile development team creates stunning, high-performance apps for both iOS and Android using cross-platform frameworks like React Native and Flutter. This approach lets us deliver native-quality experiences while reducing development time and cost. Every app we build includes offline capabilities, push notifications, and seamless backend integration to keep your users engaged.",
        features: [
            "Cross-Platform (iOS & Android)",
            "Offline-First Architecture",
            "Push Notifications & Deep Linking",
            "In-App Payments & Subscriptions",
            "Biometric Authentication",
            "App Store Optimisation & Launch",
        ],
    },
    {
        title: "Website Development",
        slug: "website-development",
        icon: "Globe",
        image: "/img_16.jpeg",
        short: "Custom, performance-optimised websites that convert visitors into customers.",
        description:
            "From single-page landing sites to enterprise content platforms, we build pixel-perfect, lightning-fast websites on modern frameworks so every visit counts.",
        longDescription:
            "Your website is often the first impression customers have of your brand. We design and develop pixel-perfect, blazing-fast websites that look stunning on every device and convert visitors into customers. Built on modern frameworks with SEO best practices baked in from day one, our websites are engineered for both aesthetics and performance.",
        features: [
            "Responsive & Mobile-First Design",
            "CMS Integration (WordPress, Headless)",
            "E-Commerce Solutions",
            "Performance & Core Web Vitals",
            "SEO-Friendly Architecture",
            "Analytics & Conversion Tracking",
        ],
    },
    {
        title: "Web Hosting",
        slug: "web-hosting",
        icon: "Server",
        image: "/img_7.jpg",
        short: "Managed cloud hosting with 99.99% uptime and 24/7 monitoring.",
        description:
            "We provision, optimise, and monitor your infrastructure on AWS, GCP, or Azure so you can focus on your business while we handle the ops.",
        longDescription:
            "Reliable hosting is the backbone of a successful digital presence. Our managed cloud hosting service takes the complexity out of infrastructure management. We provision, optimise, and monitor your servers on leading cloud platforms — AWS, Google Cloud, and Azure — ensuring maximum uptime, security, and performance so you can focus entirely on growing your business.",
        features: [
            "99.99% Uptime Guarantee",
            "Automated Backups & Disaster Recovery",
            "DDoS Protection & SSL Certificates",
            "Auto-Scaling Infrastructure",
            "24/7 Server Monitoring & Alerts",
            "CDN & Global Edge Caching",
        ],
    },
    {
        title: "SEO Optimisation",
        slug: "seo-optimisation",
        icon: "Search",
        image: "/img_8.jpg",
        short: "Data-driven strategies that put you on page one — and keep you there.",
        description:
            "Technical audits, keyword research, on-page optimisation, and authoritative link-building work together to grow your organic traffic month over month.",
        longDescription:
            "Our SEO team takes a data-driven approach to search engine optimisation, combining technical expertise with creative content strategy. We start with comprehensive audits and keyword research, then implement on-page optimisations, build authoritative backlinks, and provide transparent monthly reporting. The result is sustainable organic growth that compounds over time.",
        features: [
            "Technical SEO Audits",
            "Keyword Research & Strategy",
            "On-Page & Content Optimisation",
            "Link Building & Outreach",
            "Local SEO & Google Business",
            "Monthly Reporting & Analytics",
        ],
    },
    {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        icon: "Palette",
        image: "/img_9.jpg",
        short: "Research-led interfaces that delight users and drive engagement.",
        description:
            "We blend user research, wireframing, and high-fidelity prototyping to craft intuitive experiences that keep your audience coming back.",
        longDescription:
            "Great design is more than aesthetics — it's about understanding your users and crafting experiences that feel effortless. Our UI/UX design process begins with deep user research and competitive analysis, progresses through wireframing and prototyping, and culminates in polished, pixel-perfect interfaces. Every decision is backed by data and tested with real users.",
        features: [
            "User Research & Persona Development",
            "Wireframing & Information Architecture",
            "High-Fidelity Prototyping",
            "Usability Testing & Iteration",
            "Design Systems & Component Libraries",
            "Accessibility (WCAG) Compliance",
        ],
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
        name: "Jenny Smith",
        role: "Managing Director, Himalayan Single Track",
        content:
            "Digital Web Tek transformed our outdated platform into a sleek, modern web app. Their attention to detail and commitment to deadlines is unmatched.",
        avatar: "/testimonials/avatar-1.jpg",
    },
    {
        name: "Deepak KC",
        role: "Founder, Eyebrow Essentials",
        content:
            "Our organic traffic grew 240% within six months of working with their Website and SEO team. They truly understand what it takes to rank and convert.",
        avatar: "/testimonials/avatar-2.jpg",
    },
    {
        name: "Bishnu Rijal",
        role: "CEO, NN Taxi Centraal",
        content:
            "From concept to launch in eight weeks — the web app and website they built exceeded every expectation. Their team communicates transparently and delivers fast.",
        avatar: "/testimonials/avatar-3.jpg",
    },
];

export const projects = [
    {
        title: "Himalayan Single track",
        category: "Web Application",
        image: "/projects/project-1.png",
        description: "A full-stack website and admin portal for a mountain biking company in Nepal, enabling international customers to explore curated trail packages, book experiences, and manage trips, with an integrated backend for bookings, content management and customer management.",
        duration: "3 months",
        tech_stack: "Next.js, React.js, Express.js, MongoDB"
    },
    {
        title: "NN Taxi Centraal",
        category: "Website Development",
        image: "/projects/project-2.png",
        description: "An SEO-optimized cab booking website for the Netherlands, enabling users to quickly find, compare, and reserve rides with real-time availability.",
        duration: "2 weeks",
        tech_stack: "Next.js, Express.js, MongoDB"
    },
    {
        title: "SaaS Task Manager",
        category: "Web Application",
        image: "/projects/project-3.png",
        description: "A scalable SaaS task management platform for organizations, enabling teams to plan, assign, and track work in real time with collaboration tools, workflow automation, and performance insights.",
        duration: "1 month",
        tech_stack: "React.js, Express.js, MongoDB"
    },
    {
        title: "Eyeborw Essential",
        category: "Website Development",
        image: "/projects/project-4.png",
        description: "An SEO-optimized beauty services website for the U.S., allowing customers to discover, compare, and book appointments with salons and professionals.",
        duration: "2 weeks",
        tech_stack: "Next.js, React.js, Express.js, MongoDB"
    },
    {
        title: "Skyloft",
        category: "Website Development",
        image: "/projects/project-5.png",
        description: "A high-performance flight comparison and booking website that aggregates airline fares in real time, enabling users to find the best deals, compare routes, and seamlessly reserve tickets through an intuitive, user-friendly interface.",
        duration: "1 week",
        tech_stack: "React.js, REST API"
    },
    {
        title: "Melodio",
        category: "Web Application",
        image: "/projects/project-6.png",
        description: "A real-time music streaming and social web app that lets users listen to songs, chat with friends, and see what others are playing live, powered by synchronized playback and interactive social features.",
        duration: "2 months",
        tech_stack: "React.js, Express.js, MongoDB"
    },
    {
        title: "Flight Analytics",
        category: "Website Development",
        image: "/projects/project-7.png",
        description: "A real-time flight data platform that aggregates and displays accurate information on departures, arrivals, schedules, and routes, enabling users to track and analyze global flight activity through a fast, intuitive interface.",
        duration: "1 week",
        tech_stack: "React.js, REST API"
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

export const contactInfo = {
    email: "admin@digitalwebtek.com",
    phone: "+61404625655",
    address: "Gold Coast, QLD, Australia"
}
