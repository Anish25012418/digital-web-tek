import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig, navLinks, services, contactInfo } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-card">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* ── Company Info ── */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center group scale-[0.6] sm:scale-[0.65] origin-left">
                            <Logo />
                        </Link>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {siteConfig.description}
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, href: siteConfig.links.facebook, label: "Facebook" },
                                { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
                                { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
                                { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Quick Links ── */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 transition-opacity group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Services ── */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {service.title}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 transition-opacity group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Contact ── */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <span className="font-medium text-foreground">Email</span>
                                <br />
                                {contactInfo.email}
                            </li>
                            <li>
                                <span className="font-medium text-foreground">Phone</span>
                                <br />
                                {contactInfo.phone}
                            </li>
                            <li>
                                <span className="font-medium text-foreground">Address</span>
                                <br />
                                {contactInfo.address}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        &copy; {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-muted-foreground">
                        <Link href="#" className="transition-colors hover:text-foreground">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="transition-colors hover:text-foreground">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
