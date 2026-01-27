import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { AmonarqLogo } from "@/components/brand/AmonarqLogo";
import { Eye, Heart, Shield, Target, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About Amonarq"
        description="Amonarq builds systems focused on life continuity. We believe technology should reduce chaos, respect intent, and support people during critical moments."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "mainEntity": {
                "@id": "https://amonarq.com/#organization"
              },
              "description": "Amonarq builds systems focused on life continuity. We believe technology should reduce chaos, respect intent, and support people during critical moments."
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
                  "name": "About",
                  "item": "https://amonarq.com/about"
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
              About Amonarq
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Building systems focused on life continuity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <AmonarqLogo className="h-16" showWordmark={false} />
            </div>

            <div className="space-y-12 text-center md:text-left">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  AMONARQ is building technology for <span className="text-gradient">digital life continuity.</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  As our lives become increasingly digital, important information, responsibilities, and instructions often remain unstructured and inaccessible when they are needed the most. This creates uncertainty, emotional stress, and operational challenges for families and trusted individuals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    MYNXT is designed to solve this gap.
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Instead of storing data, MYNXT enables individuals to pre-define how their digital life should continue — clearly, securely, and with consent. Users can specify who should be involved, what information or instructions matter, when continuity should be triggered, and how execution should occur.
                  </p>
                </div>
                <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
                  <p className="text-foreground text-lg leading-relaxed italic">
                    "The platform focuses on controlled access, validation-driven execution, and traceable processes — ensuring that digital continuity happens responsibly, without ambiguity or misuse."
                  </p>
                </div>
              </div>

              <div className="pt-12 text-center">
                <div className="inline-block p-1 rounded-full bg-primary/10 mb-6">
                  <div className="bg-background px-6 py-2 rounded-full border border-primary/20">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Mission</span>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
                  AMONARQ’s mission is to reduce chaos during critical moments by bringing structure, clarity, and trust to digital continuity.
                </p>
              </div>

              {/* Added Vision & Philosophy */}
              <div className="grid md:grid-cols-2 gap-12 pt-16">
                <div className="space-y-6 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-left">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-2">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "To help life continue smoothly, even when someone is unavailable."
                  </p>
                </div>

                <div className="space-y-6 p-8 rounded-2xl bg-secondary/5 border border-secondary/10 text-left">
                  <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-2">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Philosophy</h3>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      Reduce confusion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      Respect consent
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      Build with restraint
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      Focus on real-world problems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Amonarq Systems Private Limited
            </h2>
            <address className="text-muted-foreground not-italic mb-8">
              4-578 & Row House, Prasanth Nagar,<br />
              Madanapalle, Andhra Pradesh<br />
              PIN-517325, India
            </address>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
