import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function PrivacyPolicyPage() {
    const lastUpdated = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <Layout>
            <SEO
                title="Privacy Policy"
                description="Our Privacy Policy explains how we collect, use, store, and protect information when you use Mynxt."
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
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
                                    "name": "Privacy Policy",
                                    "item": "https://amonarq.com/privacy"
                                }
                            ]
                        }
                    ]
                }}
            />
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection className="max-w-4xl mx-auto">
                        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2 text-muted-foreground hover:text-foreground">
                            <Link to="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Amonarq / MyNxt | Last updated: {lastUpdated}
                        </p>

                        <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                            <section>
                                <p className="mb-4">
                                    Amonarq (“we”, “our”, “us”) operates the Mynxt platform. This Privacy Policy explains how we collect, use, store, and protect information when you use Mynxt.
                                </p>
                                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                                    <p className="text-foreground font-semibold mb-2">
                                        MYNXT does not claim ownership of user data or digital assets.
                                    </p>
                                    <p className="text-muted-foreground">
                                        The platform facilitates consent-based continuity instructions and controlled access flows, executed only under predefined user conditions.
                                    </p>
                                </div>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">1. Information We Collect</h2>
                                <p className="mb-4">We collect information only to enable continuity execution and platform functionality.</p>

                                <h3 className="text-lg font-medium text-foreground mb-3">a) Information provided by users</h3>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>Name, email, phone number</li>
                                    <li>Emergency contacts / trusted individuals (as defined by the user)</li>
                                    <li>Instructions and continuity-related information</li>
                                    <li>Preferences, rules, and triggers defined by the user</li>
                                </ul>

                                <h3 className="text-lg font-medium text-foreground mb-3">b) System & usage information</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Login activity</li>
                                    <li>Inactivity status</li>
                                    <li>Device and browser information</li>
                                    <li>Platform usage logs</li>
                                </ul>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">2. Purpose of Data Collection</h2>
                                <p className="mb-4">We use collected information to:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Enable continuity execution workflows</li>
                                    <li>Monitor predefined triggers (such as inactivity)</li>
                                    <li>Notify designated contacts or heirs as instructed</li>
                                    <li>Ensure platform security and integrity</li>
                                    <li>Comply with applicable laws</li>
                                </ul>
                                <p className="mt-6 font-medium text-primary">
                                    We do not use personal data for advertising or resale.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">3. Consent-Based Access</h2>
                                <p className="mb-4">Mynxt follows a consent-driven access model:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>No data is disclosed by default</li>
                                    <li>Access is granted only after predefined conditions and approvals are met</li>
                                    <li>Notification does not automatically mean access</li>
                                </ul>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">4. Data Storage & Security</h2>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Data is stored using secure and encrypted systems</li>
                                    <li>Access controls and audit logs are applied</li>
                                    <li>Reasonable technical and organizational safeguards are used</li>
                                </ul>
                                <p className="mt-6 italic">
                                    While we take security seriously, no digital system can be guaranteed to be 100% secure.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">5. Data Sharing</h2>
                                <p className="mb-4">We do not sell or rent user data. Data may be shared only:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>As per user-defined instructions</li>
                                    <li>With designated individuals after conditions are met</li>
                                    <li>When required by law or lawful authorities</li>
                                </ul>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">6. User Control</h2>
                                <p className="mb-4">Users can:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Update or modify their information</li>
                                    <li>Change triggers, instructions, or contacts</li>
                                    <li>Request account deactivation</li>
                                </ul>
                                <p className="mt-4 text-sm">Certain information may be retained if required by law.</p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">7. Third-Party Services</h2>
                                <p>
                                    Mynxt may use trusted third-party services (such as cloud infrastructure providers) strictly for platform operation. These providers are bound by confidentiality and security obligations.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">8. Children’s Privacy</h2>
                                <p>
                                    Mynxt is not intended for individuals under the age of 18.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">9. Changes to This Policy</h2>
                                <p>
                                    This Privacy Policy may be updated periodically. Continued use of the platform indicates acceptance of the updated policy.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">10. Contact</h2>
                                <p className="mb-4">For privacy-related questions:</p>
                                <div className="flex flex-col space-y-2">
                                    <a href="mailto:contact@Amonarq.com" className="text-primary hover:underline">
                                        📧 contact@amonarq.com
                                    </a>
                                    <p>📍 4-578 & Row House, Prasanth Nagar,
                                        Madanapalle, Andhra Pradesh
                                        PIN-517325, India.</p>
                                </div>
                            </section>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </Layout>
    );
}
