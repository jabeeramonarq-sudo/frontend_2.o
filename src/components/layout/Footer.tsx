import { Link } from "react-router-dom";
import { AmonarqLogo } from "@/components/brand/AmonarqLogo";
import { Mail, MapPin, Globe, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <img
                src="/mynxt-logo.png"
                alt="MyNxt by Amonarq"
                className="h-14 w-auto object-contain brightness-110 contrast-125"
              />
              <p><i>By Amonarq</i></p>
            </Link>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
              Organise life responsibilities today and ensure they are handled smoothly when you're unavailable.
              <span className="text-foreground font-medium ml-1">MyNxt</span> is a continuity-first digital product by Amonarq.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "MyNxt", path: "/product" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Life Events", path: "/life-events" },
                { label: "Continuity", path: "/continuity" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Consent & Approval", path: "/consent" },
                { label: "Security & Trust", path: "/security" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-primary/60 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  4-578 & Row House, Prasanth Nagar, Madanapalle, AP - 517325,India.
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-primary/60 shrink-0 group-hover:text-primary transition-colors" />
                <a href="mailto:contact@amonarq.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  contact@amonarq.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Globe className="h-5 w-5 text-primary/60 shrink-0 group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground text-sm italic">
                  www.amonarq.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/20 space-y-8">
          {/* Transparency Statement */}
          <div className="max-w-4xl mx-auto px-6 py-4 bg-primary/5 border border-primary/10 rounded-xl">
            <p className="text-muted-foreground/70 text-[11px] md:text-[12px] text-center leading-relaxed">
              <span className="text-primary/80 font-semibold uppercase mr-2 tracking-wider text-[10px]">Disclaimer:</span>
              MyNxt is a consent-based digital continuity execution platform, focused on structured access and predefined instructions and MyNxt does not store or claim ownership over user assets.
            </p>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-muted-foreground/60 hover:text-primary text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground/60 hover:text-primary text-xs transition-colors">
                Terms of Service
              </Link>
            </div>

            <p className="text-muted-foreground/60 text-xs">
              © {currentYear} Amonarq Systems. All rights reserved.
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
}
