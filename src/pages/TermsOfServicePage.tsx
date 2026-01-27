import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function TermsOfServicePage() {
    const lastUpdated = "25-Jan-2026";

    return (
        <Layout>
            <SEO
                title="Terms of Service"
                description="These Terms govern the use of Mynxt, a continuity execution platform operated by amonarq."
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
                                    "name": "Terms of Service",
                                    "item": "https://amonarq.com/terms"
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
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Amonarq / MyNxt | Last updated: {lastUpdated}
                        </p>

                        <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                            <section>
                                <p>
                                    These Terms govern the use of Mynxt, a continuity execution platform operated by Amonarq. By accessing or using Mynxt, you agree to these Terms.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">1. Nature of the Service</h2>
                                <p className="mb-4">Mynxt is a continuity execution platform, not:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>A digital locker or vault</li>
                                    <li>A password manager</li>
                                    <li>A legal advisory or decision-making service</li>
                                </ul>
                                <p className="mt-4">
                                    Mynxt enables users to define rules and instructions that may be executed under specific conditions.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">2. User Responsibility</h2>
                                <p className="mb-4">Users are responsible for:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Providing accurate information</li>
                                    <li>Defining lawful and appropriate instructions</li>
                                    <li>Selecting trusted individuals or heirs</li>
                                </ul>
                                <p className="mt-6 font-medium text-warning">
                                    Amonarq does not verify the legal validity of user instructions.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">3. No Guaranteed Outcomes</h2>
                                <p className="mb-4">Mynxt facilitates execution workflows but:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Does not guarantee legal enforceability</li>
                                    <li>Does not replace wills, legal documents, or professional advice</li>
                                    <li>Does not make decisions on behalf of users</li>
                                </ul>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">4. Consent & Execution</h2>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>No access is granted without predefined conditions</li>
                                    <li>Execution depends on system triggers and verification processes</li>
                                    <li>Delays or failures may occur due to technical or external factors</li>
                                </ul>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">5. Account Security</h2>
                                <p>
                                    Users are responsible for safeguarding their login credentials. Unauthorized use must be reported immediately.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">6. Platform Availability</h2>
                                <p>
                                    We aim to maintain platform availability but do not guarantee uninterrupted access.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">7. Limitation of Liability</h2>
                                <p className="mb-4">To the maximum extent permitted by law:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Amonarq shall not be liable for indirect or consequential damages</li>
                                    <li>Use of Mynxt is at the user’s own risk</li>
                                </ul>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">8. Suspension or Termination</h2>
                                <p className="mb-4">We reserve the right to suspend or terminate access in case of:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Misuse</li>
                                    <li>Violation of these Terms</li>
                                    <li>Legal or regulatory requirements</li>
                                </ul>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">9. Governing Law</h2>
                                <p>
                                    These Terms are governed by the laws of India. Courts in India shall have jurisdiction.
                                </p>
                            </section>

                            <hr className="border-border/30" />

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">10. Contact</h2>
                                <p className="mb-4">For questions regarding these Terms:</p>
                                <div className="flex flex-col space-y-2">
                                    <a href="mailto:contact@Amonarq.com" className="text-primary hover:underline">
                                        📧 contact@amonarq.com
                                    </a>
                                </div>
                            </section>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </Layout>
    );
}
