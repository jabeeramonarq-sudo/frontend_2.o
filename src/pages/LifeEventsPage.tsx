import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { FileText, Users, Settings, Eye, Shield, Heart, ArrowRight } from "lucide-react";

export default function LifeEventsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Life Events
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              The core building block of Mynxt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is a Life Event */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What is a Life Event?
            </h2>
            <p className="text-muted-foreground text-lg text-center mb-12">
              A Life Event is a structured way to organise a specific area of life responsibility.
            </p>

            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10">
              <p className="text-foreground text-center mb-8">
                It brings together:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Relevant Information</h4>
                  <p className="text-sm text-muted-foreground">Documents, details, and context</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Trusted People</h4>
                  <p className="text-sm text-muted-foreground">Family, friends, or advisors</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Clear Rules</h4>
                  <p className="text-sm text-muted-foreground">Access and sharing conditions</p>
                </div>
              </div>
              <p className="text-primary text-center mt-8 font-medium">
                All in one place.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Life Events Matter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Life Events Matter
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Clarity for everyone
                </h3>
                <p className="text-muted-foreground">
                  Everyone involved knows what's expected and where to find information.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Less confusion
                </h3>
                <p className="text-muted-foreground">
                  Reduces chaos and misunderstandings during critical moments.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Clear intent
                </h3>
                <p className="text-muted-foreground">
                  Your wishes and responsibilities are documented and respected.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              See how Life Events work with continuity
            </h2>
            <p className="text-muted-foreground mb-8">
              Learn how Mynxt ensures your Life Events are protected for the future.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/continuity">
                Learn About Continuity
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
