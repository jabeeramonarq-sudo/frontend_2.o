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

      {/* Who We Are */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <AmonarqLogo className="h-12" showWordmark={false} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Who We Are
            </h2>

            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 text-center">
              <p className="text-muted-foreground text-lg mb-6">
                Amonarq is building systems focused on life continuity.
              </p>
              <p className="text-foreground">
                We believe technology should reduce chaos, respect intent,
                and support people during critical moments.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vision
            </h2>
            <p className="text-xl text-muted-foreground font-display">
              To help life continue smoothly, even when someone is unavailable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Philosophy
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Reduce confusion", desc: "Bring clarity to complex situations" },
              { icon: Heart, title: "Respect consent", desc: "Every action requires authorization" },
              { icon: Shield, title: "Build with restraint", desc: "Do only what's necessary" },
              { icon: Eye, title: "Focus on real problems", desc: "Solve genuine human needs" },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
