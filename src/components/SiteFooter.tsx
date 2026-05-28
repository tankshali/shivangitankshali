import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import cpaLogo from "@/assets/usa_cpa_logo.jpeg";
import linkedinIcon from "@/assets/linkedin.svg";
import instagramIcon from "@/assets/instagram.svg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={cpaLogo} alt="CPA Logo" className="h-9 w-9 rounded-md object-cover" />
            <span className="font-serif text-lg">Shivangi Tankshali, CPA</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Licensed US CPA helping businesses and individuals navigate US taxes with clarity and confidence.
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
              <a href="mailto:cashivangitankshali@gmail.com" className="hover:text-foreground">
                cashivangitankshali@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold" />
              <a href="tel:+919925193737" className="hover:text-foreground">+91 99251 93737</a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a href="https://www.linkedin.com/in/shivangi-tankshali-1534171a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-border p-2 hover:text-foreground">
                <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/shivangi_tankshali/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md border border-border p-2 hover:text-foreground">
                <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
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
