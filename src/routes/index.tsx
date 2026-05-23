import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Calculator, Building2, BookOpen,
  Receipt, TrendingUp, Mail, Phone, Linkedin, Instagram, PlayCircle, Quote,
} from "lucide-react";
import shivangi from "@/assets/shivangi.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivangi Tankshali, CPA & CA — US Tax Filing & Advisory" },
      { name: "description", content: "US licensed CPA and Indian Chartered Accountant with 10+ years experience. Helping businesses navigate US financial and compliance requirements." },
      { property: "og:title", content: "Shivangi Tankshali, CPA & CA — US Tax Filing & Advisory" },
      { property: "og:description", content: "US tax filing, LLC/S-Corp strategy, bookkeeping, payroll, and ongoing advisory." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Shivangi Tankshali, CPA",
        description: "Licensed US CPA providing US tax filing and advisory services.",
        email: "shivangitankshali@gmail.com",
        telephone: "+91-9925193737",
        areaServed: "US",
      }),
    }],
  }),
  component: Home,
});

const services = [
  { icon: Receipt, title: "US Tax Return Filing", desc: "Individual & business returns prepared accurately and on time." },
  { icon: Building2, title: "LLC & S-Corp Setup", desc: "Entity formation and tax strategy built around your goals." },
  { icon: BookOpen, title: "Bookkeeping & Payroll", desc: "Clean books, reliable payroll, and audit-ready records." },
  { icon: Calculator, title: "Sales Tax Compliance", desc: "Multi-state nexus tracking and sales tax filings." },
  { icon: TrendingUp, title: "Advisory & Tax Planning", desc: "Year-round planning to legally minimize your tax." },
  { icon: ShieldCheck, title: "IRS Compliance", desc: "Stay compliant and avoid costly penalties and surprises." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Licensed US CPA
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] md:text-6xl">
              Clarity and confidence in your <span className="text-gold italic">US taxes.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              As a Chartered Accountant and U.S. CPA with more than decade of experience in accounting, taxation, auditing, and financial advisory services. I help businesses and individuals navigate US financial and compliance requirements with accuracy, integrity, and practical expertise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-5 py-3 text-sm font-semibold text-gold-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                Book a free consultation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-white/10">
                Explore services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Individuals & businesses</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> IRS compliant</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Professional Experience</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-2xl bg-gold/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-elegant backdrop-blur">
              <img src={shivangi} alt="Shivangi Tankshali, Licensed US CPA" className="aspect-square w-full rounded-xl object-cover" />
              <div className="px-3 py-4">
                <p className="font-serif text-xl text-primary-foreground">Shivangi Tankshali</p>
                <p className="text-xs uppercase tracking-[0.18em] text-gold">Licensed US CPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 text-center md:grid-cols-4">
          {[
            { k: "100%", v: "IRS Compliant Filings" },
            { k: "1:1", v: "Personal Advisory" },
            { k: "USA", v: "Federal & State Returns" },
            { k: "10+ Years", v: "Tax Planning" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-serif text-3xl text-foreground">{s.k}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What I offer</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Specialized services to keep you compliant and tax-efficient</h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-primary hover:underline">View all services →</Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-secondary/60 via-background to-accent/40 p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gold-gradient opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition-all group-hover:bg-gold/20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                <s.icon size={22} />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE / PROMISE */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Quote className="mx-auto text-gold" size={34} />
          <p className="mt-6 font-serif text-2xl leading-snug text-foreground md:text-3xl">
            "Most business owners overpay taxes or miss key compliance steps — not because
            they want to, but because the system is complex. That's where I come in."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Shivangi Tankshali, CPA
          </p>
        </div>
      </section>

      {/* SOCIAL / EDUCATION */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Tax awareness</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Regular videos breaking down US taxation</h2>
            <p className="mt-5 text-muted-foreground">
              I share weekly content on LinkedIn and Instagram explaining US tax rules,
              compliance updates, and money-saving strategies — in plain English. Follow along
              to stay informed and avoid common, costly mistakes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                <Linkedin size={16} /> Follow on LinkedIn
              </a>
              <a href="https://instagram.com" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent">
                <Instagram size={16} /> Watch on Instagram
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {["Filing", "S-Corp", "Deductions", "Sales Tax"].map((t, i) => (
                <div key={t} className={`group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-5 shadow-soft ${i % 2 ? "translate-y-6" : ""}`}>
                  <PlayCircle className="text-gold" size={28} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Reel · {2024 + (i % 2)}</p>
                    <p className="mt-1 font-serif text-lg text-foreground">{t} explained simply</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-hero-gradient px-8 py-14 text-primary-foreground shadow-elegant md:px-14">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Unsure about your tax setup? Let's connect.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/80">
                A 30-minute consultation is often enough to spot overpayments and compliance gaps.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:shivangitankshali@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-gradient px-5 py-3 text-sm font-semibold text-gold-foreground shadow-soft">
                <Mail size={16} /> shivangitankshali@gmail.com
              </a>
              <a href="tel:+919925193737" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-white/10">
                <Phone size={16} /> +91 99251 93737
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
