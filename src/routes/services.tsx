import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Receipt, Building2, BookOpen, Calculator, TrendingUp, ShieldCheck,
  Scale, Briefcase, LineChart, Users,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — US Tax, Bookkeeping & Advisory | Shivangi Tankshali, CPA" },
      { name: "description", content: "Tax advisory, personal tax planning, bookkeeping, payroll, tax preparation, financial accounting, financial advisory, tax law, financial and business consulting." },
      { property: "og:title", content: "CPA Services — Shivangi Tankshali" },
      { property: "og:description", content: "Full-service US tax and advisory for small businesses, founders, and individuals." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const core = [
  { icon: Receipt, title: "US Tax Return Filing", desc: "Federal and state returns for individuals (1040) and businesses (1120, 1120-S, 1065)." },
  { icon: Building2, title: "LLC & S-Corp Setup", desc: "Entity formation, EIN, and tax election strategy tailored to your business." },
  { icon: BookOpen, title: "Bookkeeping", desc: "Clean monthly books with reconciliations, categorization, and reporting." },
  { icon: Users, title: "Payroll Services", desc: "Reliable payroll runs, withholdings, and quarterly filings." },
  { icon: Calculator, title: "Sales Tax Compliance", desc: "Multi-state nexus, registration, and ongoing sales tax filings." },
  { icon: TrendingUp, title: "Tax Planning & Advisory", desc: "Year-round strategy to legally minimize tax and maximize cash flow." },
];

const specialties = [
  { icon: ShieldCheck, label: "Tax Advisory" },
  { icon: TrendingUp, label: "Personal Tax Planning" },
  { icon: BookOpen, label: "Bookkeeping" },
  { icon: Users, label: "Payroll Services" },
  { icon: Receipt, label: "Tax Preparation" },
  { icon: LineChart, label: "Financial Accounting" },
  { icon: Briefcase, label: "Financial Advisory" },
  { icon: Scale, label: "Tax Law" },
  { icon: Calculator, label: "Financial Consulting" },
  { icon: Building2, label: "Business Consulting" },
];

function Services() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl md:text-5xl">
            Specialized tax services to ensure compliance and optimize your finances.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            From a single tax return to ongoing CFO-style advisory — choose the support that fits where you are today.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-serif text-3xl">Core services</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {core.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-secondary/60 via-background to-accent/40 p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gold-gradient opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition-all group-hover:bg-gold/20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                <s.icon size={22} />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Areas of specialization</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">A complete finance partner</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {specialties.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-soft">
                <s.icon size={16} className="text-gold" />
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Not sure where to start?</h2>
        <p className="mt-4 text-muted-foreground">Book a quick consultation and we'll map the right next step for your situation.</p>
        <Link to="/contact" className="mt-7 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Book a consultation
        </Link>
      </section>
    </>
  );
}
