import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileCheck, ArrowRight } from "lucide-react";

export default function SecurityPage() {
  return (
    <Layout>
      <SEO
        title="Security & Trust"
        description="Mynxt is built with responsibility at its foundation. Learn about our zero-knowledge security, consent-driven access, and tamper-proof logs."
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
                  "name": "Security",
                  "item": "https://amonarq.com/security"
                }
              ]
            }
          ]
        }}
      />
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Security & Trust
            </h1>
            <p className="text-xl text-muted-foreground font-light mb-8">
             <b>MYNXT does not claim ownership of user data or digital assets.</b>  <br />
             The platform facilitates consent-based continuity instructions and controlled access flows, executed only under predefined user conditions.

            </p>
            
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Approach
            </h2>

            <p className="text-muted-foreground text-lg text-center mb-12">
              Mynxt is built with security and responsibility at its foundation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Data Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Your data is encrypted at rest and in transit using industry-standard protocols.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Controlled Access</h3>
                <p className="text-muted-foreground text-sm">
                  Strict access controls ensure only authorized actions can be performed.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Clear Audit Trails</h3>
                <p className="text-muted-foreground text-sm">
                  Every action is logged with timestamps for complete transparency.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Responsible Execution</h3>
                <p className="text-muted-foreground text-sm">
                  Actions follow predefined rules with multiple verification steps.
                </p>
                
              </div>
            </div>
          </AnimatedSection>
        </div>
        
      </section>

      {/* Trust Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Trust isn't claimed—it's earned. We're committed to transparent practices,
              robust security, and respecting your privacy at every step. When you use
              Mynxt, you can be confident that your data is protected and your intentions
              are respected.
            </p>
            <div className="inline-flex items-center gap-3 text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-6 py-3 rounded-full shadow-sm hover:bg-primary/15 transition-colors">
              <Shield className="h-5 w-5" />
              <span>Designed in alignment with applicable data protection norms</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to learn more?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get in touch to learn more about Mynxt or request early access.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">About Amonarq</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
