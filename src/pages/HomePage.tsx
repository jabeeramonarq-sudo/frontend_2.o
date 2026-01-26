import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Layout } from "@/components/layout/Layout";
import { MynxtLogo } from "@/components/brand/AmonarqLogo";
import { 
  FolderOpen, Users, Shield, Clock, CheckCircle, XCircle, 
  ArrowRight, Lock, FileCheck, AlertTriangle, Heart
} from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

export default function HomePage() {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
        
        <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-32">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <MynxtLogo className="h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Organise Life.<br />
              <span className="text-gradient">Ensure Continuity.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              MYNXT helps you organise life responsibilities today and ensures they are 
              handled smoothly when you're unavailable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/how-it-works">
                  See How MYNXT Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Request Early Access</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-20 md:py-32 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="h-8 w-8 text-warning" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Life responsibilities are scattered.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Important information is often spread across documents, people, and conversations.
              </p>
              <p>
                When clarity is missing, even simple situations can turn chaotic.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-primary font-medium">
                MYNXT exists to bring structure, clarity, and continuity to everyday life responsibilities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: What MYNXT Helps You Do */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              One place to organise life responsibilities.
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Everything you need to manage important life matters, in one secure place.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FolderOpen, text: "Organise important life information" },
              { icon: Users, text: "Define who can help and how" },
              { icon: Lock, text: "Set clear access and sharing rules" },
              { icon: Shield, text: "Reduce confusion during critical moments" },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="flex items-start gap-4 bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Life Events (Core Concept) */}
      <section className="py-20 md:py-32 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Everything is organised as Life Events.
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              MYNXT structures life responsibilities into Life Events.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Each Life Event brings together information, people, and rules in a clear and organised way.
            </p>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 inline-block">
              <p className="text-primary">
                This keeps responsibilities easy to manage today and protected for the future.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="heroOutline" asChild>
                <Link to="/life-events">
                  Learn About Life Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Continuity, Built-In */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8">
              <Clock className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Continuity works quietly in the background.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              MYNXT includes continuity mechanisms that help ensure responsibilities 
              are handled when you're unavailable.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground/80">
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                There is no instant access.
              </span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                Every action follows predefined rules and confirmations.
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: What Makes MYNXT Different */}
      <section className="py-20 md:py-32 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
              What Makes MYNXT Different
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MYNXT DOES */}
            <AnimatedSection delay={100}>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">MYNXT DOES</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Focus on life continuity",
                    "Use consent-driven access",
                    "Follow rule-based execution",
                    "Reduce confusion and disputes",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* MYNXT DOES NOT */}
            <AnimatedSection delay={200}>
              <div className="bg-muted/30 border border-border/50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <XCircle className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">MYNXT DOES NOT</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Act as a vault or locker",
                    "Provide instant access",
                    "Replace legal processes",
                    "Take actions without consent",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="h-5 w-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 7: Trust & Responsibility */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built with care and responsibility.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              MYNXT is designed with security, consent, and restraint at its core.
              Access is controlled, actions are logged, and intent is respected at every step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/security">
                  Learn About Security
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Request Early Access</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
