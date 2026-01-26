import { Link } from "react-router-dom";
import { AmonarqLogo } from "@/components/brand/AmonarqLogo";

export function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <AmonarqLogo className="h-8 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Organise life responsibilities today and ensure they are handled
              smoothly when you're unavailable. Mynxt is a continuity-first
              digital product by amonarq.
            </p>
            <p className="text-muted-foreground/60 text-xs">
              amonarq Systems Private Limited
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/life-events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Life Events
                </Link>
              </li>
              <li>
                <Link to="/continuity" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Continuity
                </Link>
              </li>
              <li>
                <Link to="/consent" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Consent & Approval
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Security & Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About amonarq
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li className="pt-4">
                <a href="mailto:contact@amonarq.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@amonarq.com
                </a>
              </li>
              <li className="pt-2">
                <address className="text-muted-foreground/70 not-italic text-xs leading-relaxed">
                  4-578 & Row House, Prasanth Nagar,<br />
                  Madanapalle, Andhra Pradesh<br />
                  PIN-517325, India
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} amonarq Systems Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground/60 hover:text-muted-foreground text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground/60 hover:text-muted-foreground text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
