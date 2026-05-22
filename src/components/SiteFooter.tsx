import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-hero-gradient text-sm font-semibold text-primary-foreground">
              ST
            </span>
            <span className="font-serif text-lg">Shivangi Tankshali, CPA</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Licensed US CPA helping small businesses, founders, and individuals navigate
            US taxes with clarity and confidence.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-base text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Book a consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold" />
              <a href="mailto:shivangitankshali@gmail.com" className="hover:text-foreground">
                shivangitankshali@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold" />
              <a href="tel:+919925193737" className="hover:text-foreground">+91 99251 93737</a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="rounded-md border border-border p-2 hover:text-foreground">
                <Linkedin size={15} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="rounded-md border border-border p-2 hover:text-foreground">
                <Instagram size={15} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shivangi Tankshali, CPA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
