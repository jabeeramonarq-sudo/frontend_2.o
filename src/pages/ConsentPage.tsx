import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Heart, ArrowRight, UserCheck, Lock, FileCheck } from "lucide-react";

export default function ConsentPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        
        <div className="container relative mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Consent & Approval
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Every action requires explicit authorization.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Consent First */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <UserCheck className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Consent First
            </h2>
            
            <div className="text-center space-y-6">
              <p className="text-muted-foreground text-lg">
                Every role, action, and access level in MYNXT is defined with consent.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>No action happens automatically.</span>
                </div>
                <span className="hidden md:block text-muted-foreground">•</span>
                <div className="flex items-center gap-2 text-foreground">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <span>No responsibility transferred without confirmation.</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why This Matters
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-7 w-7 text-destructive/70" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Prevents Misuse
                </h3>
                <p className="text-muted-foreground">
                  Multiple layers of consent ensure your information can't be accessed 
                  without proper authorization.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-7 w-7 text-warning/70" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Reduces Disputes
                </h3>
                <p className="text-muted-foreground">
                  Clear consent trails mean everyone knows what was agreed and when.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Respects Intent
                </h3>
                <p className="text-muted-foreground">
                  Your personal intentions and wishes are honored exactly as you defined them.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Consent Flow */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              The Approval Flow
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-2xl p-8 md:p-10">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">You Define Roles</h4>
                    <p className="text-muted-foreground text-sm">
                      Assign trusted people with specific responsibilities and access levels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">They Accept Responsibility</h4>
                    <p className="text-muted-foreground text-sm">
                      Each person must explicitly accept their role and acknowledge the rules.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Actions Require Confirmation</h4>
                    <p className="text-muted-foreground text-sm">
                      When actions are triggered, they require additional confirmation steps.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Everything is Logged</h4>
                    <p className="text-muted-foreground text-sm">
                      Complete audit trail ensures transparency and accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Security is built into every layer
            </h2>
            <p className="text-muted-foreground mb-8">
              Learn about our comprehensive approach to protecting your data.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/security">
                Learn About Security
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
