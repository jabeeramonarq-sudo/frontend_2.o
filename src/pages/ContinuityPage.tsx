import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Clock, Shield, AlertCircle, ArrowRight, Lock, CheckCircle } from "lucide-react";

export default function ContinuityPage() {
  return (
    <Layout>
      <SEO
        title="Continuity & Triggers"
        description="Learn how MyNxt ensures responsibilities don't get stuck through smart continuity checks and predefined triggers."
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
                  "name": "Continuity",
                  "item": "https://amonarq.com/continuity"
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
              Continuity & Triggers
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              How MyNxt ensures responsibilities don't get stuck.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Continuity Explained */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                <Clock className="h-10 w-10 text-secondary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Continuity Explained
            </h2>

            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 text-center">
              <p className="text-muted-foreground text-lg mb-6">
                MyNxt uses continuity checks to ensure responsibilities don't get stuck
                if someone becomes unavailable.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" />
                  Cautious
                </span>
                <span className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4" />
                  Rule-based
                </span>
                <span className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Lock className="h-4 w-4" />
                  Consent-driven
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="bg-warning/5 border border-warning/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Important Note
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    Triggers do not grant access.
                  </p>
                  <p className="text-muted-foreground">
                    They only initiate a controlled process based on predefined rules.
                    Every step requires verification and follows the consent framework
                    you've established.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How Triggers Work */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              How Continuity Works
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: "1",
                title: "Regular Check-ins",
                desc: "MyNxt periodically verifies your availability through simple confirmations."
              },
              {
                step: "2",
                title: "Trigger Activation",
                desc: "If confirmations are missed, the continuity process begins based on your rules."
              },
              {
                step: "3",
                title: "Verification Steps",
                desc: "Multiple verification steps ensure the trigger is valid before any action."
              },
              {
                step: "4",
                title: "Controlled Access",
                desc: "Only after all conditions are met, designated people receive limited access as defined."
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="flex gap-4 bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Consent is at the heart of everything
            </h2>
            <p className="text-muted-foreground mb-8">
              Learn how MyNxt ensures no action happens without proper authorization.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/consent">
                Learn About Consent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
