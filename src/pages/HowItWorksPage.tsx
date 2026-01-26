import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  FolderOpen, Users, Settings, Shield, PlayCircle,
  ArrowRight, ChevronRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Organise",
    description: "Create Life Events to organise responsibilities and information.",
    icon: FolderOpen,
  },
  {
    number: "02",
    title: "Define Roles",
    description: "Add people and define how they can help.",
    icon: Users,
  },
  {
    number: "03",
    title: "Set Rules",
    description: "Decide what is shared, when, and under what conditions.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Continuity Protection",
    description: "Enable continuity checks that work quietly in the background.",
    icon: Shield,
  },
  {
    number: "05",
    title: "Controlled Execution",
    description: "When needed, actions follow predefined rules and confirmations.",
    icon: PlayCircle,
  },
];

export default function HowItWorksPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How Mynxt Works
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              A simple flow to organise, protect, and ensure continuity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className={`flex gap-6 md:gap-10 ${idx !== steps.length - 1 ? 'pb-12 md:pb-16' : ''}`}>
                  {/* Step number and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{step.number}</span>
                    </div>
                    {idx !== steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-4" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to organise your life responsibilities?
            </h2>
            <p className="text-muted-foreground mb-8">
              Request early access to be among the first to experience Mynxt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/life-events">
                  Learn About Life Events
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
