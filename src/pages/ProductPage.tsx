import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Smartphone,
    Lock,
    Users,
    Clock,
    Bell,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductPage() {
    return (
        <Layout>
            <SEO
                title="Mynxt - Life's Continuity Companion"
                description="Mynxt by Amonarq is your personal continuity companion. Organise important information, set execution rules, and ensure your loved ones are supported."
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "SoftwareApplication",
                            "name": "Mynxt",
                            "operatingSystem": "Web, Android, iOS",
                            "applicationCategory": "ProductivityApplication, SecurityApplication",
                            "description": "A continuity-first platform designed to organize and protect life responsibilities through secure, consent-based systems.",
                            "offers": {
                                "@type": "Offer",
                                "price": "0.00",
                                "priceCurrency": "INR"
                            },
                            "publisher": {
                                "@id": "https://amonarq.com/#organization"
                            }
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://amonarq.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Product",
                                    "item": "https://amonarq.com/product"
                                }
                            ]
                        }
                    ]
                }}
            />
            {/* Hero Section - Refined Proportions */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection className="max-w-4xl mx-auto">
                        <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] p-6 md:p-12 shadow-xl overflow-hidden group">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Floating Logo - Reduced Size */}
                                <div className="mb-8 animate-float">
                                    <img
                                        src="/mynxt-logo.png"
                                        alt="Mynxt Logo"
                                        className="h-14 md:h-20 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                                    Life's Matters.<br />
                                    <span className="text-gradient">Continuity Ensured.</span>
                                </h1>

                                <p className="text-base md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-light">
                                    Mynxt is a premium continuity platform by <span className="text-foreground font-medium">Amonarq</span>.
                                    Protect your intent, organise your responsibilities, and bridge the gap between today and tomorrow.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300" asChild>
                                        <Link to="/contact">Request Early Access</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full px-8 backdrop-blur-md border-border/60 hover:bg-muted/40 transition-all duration-300" asChild>
                                        <Link to="/how-it-works">Discover Mynxt</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100%] -mr-16 -mt-16 blur-xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-tr-[100%] -ml-16 -mb-16 blur-xl" />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Core Concept Section */}
            <section className="py-20 bg-surface-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Not just another vault.<br />
                                A platform for continuity.
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Unlike traditional storage apps, Mynxt is designed around the concept of **Life Events**.
                                It doesn't just store data; it maps out who needs to know what, when they need to know it,
                                and the rules that must be followed for access.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: ShieldCheck, title: "Consent-Driven", desc: "Access is only granted based on your predefined rules and triggers." },
                                    { icon: Lock, title: "Zero-Knowledge Security", desc: "Your sensitive information stays encrypted and private." },
                                    { icon: Users, title: "Co-Pilot Support", desc: "Empower trusted individuals to help execute your instructions." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200} className="relative">
                            <div className="aspect-square relative rounded-3xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex items-center justify-center">
                                {/* Visual Representation of the App Interface */}
                                <div className="w-full max-w-[280px] aspect-[9/19] bg-background rounded-[40px] border-[8px] border-border shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-border rounded-b-2xl" />
                                    <div className="p-6 pt-10">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 mb-6" />
                                        <div className="space-y-4">
                                            <div className="h-4 w-3/4 bg-muted rounded" />
                                            <div className="h-4 w-full bg-muted rounded" />
                                            <div className="h-20 w-full bg-primary/5 border border-primary/20 rounded-xl p-3 flex flex-col justify-end">
                                                <div className="h-2 w-1/2 bg-primary/40 rounded" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-16 bg-muted/50 rounded-xl" />
                                                <div className="h-16 bg-muted/50 rounded-xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-primary rounded-full" />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for the real world.</h2>
                        <p className="text-muted-foreground text-lg">
                            Every feature in Mynxt is built to solve actual challenges encountered when Managing
                            life's most critical responsibilities.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "Continuity Checks",
                                desc: "Smart reminders to keep your information up to date and verify your status."
                            },
                            {
                                icon: Bell,
                                title: "Active Notifications",
                                desc: "Keep your co-pilots and family informed with real-time updates and alerts."
                            },
                            {
                                icon: CheckCircle2,
                                title: "Execution Rules",
                                desc: "Define exactly what should happen when a Life Event is triggered."
                            },
                            {
                                icon: Users,
                                title: "Multi-Role Access",
                                desc: "Assign different roles to family, friends, or professionals for specific events."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Tamper-Proof Logs",
                                desc: "Every access request and action is logged for transparency and security."
                            },
                            {
                                icon: Smartphone,
                                title: "Seamless Experience",
                                desc: "A clean, intuitive interface designed to reduce stress during critical moments."
                            }
                        ].map((feature, i) => (
                            <AnimatedSection key={i} delay={i * 100} className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -ml-32 -mb-32" />

                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to ensure continuity?</h2>
                            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                                Join the early access program and be among the first to experience a
                                new way of Managing life's responsibilities.
                            </p>
                            <Button size="xl" className="rounded-full px-12" asChild>
                                <Link to="/contact">
                                    Get Started Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
