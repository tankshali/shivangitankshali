import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Linkedin, Instagram } from "lucide-react";
import shivangi from "@/assets/shivangi.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shivangi Tankshali, CPA" },
      { name: "description", content: "Meet Shivangi Tankshali, a licensed US CPA helping small businesses and individuals navigate US tax filing and compliance." },
      { property: "og:title", content: "About — Shivangi Tankshali, CPA" },
      { property: "og:description", content: "Licensed US CPA. Tax filing, advisory, and education for small businesses and individuals." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const principles = [
  "Stay fully IRS compliant — no shortcuts, no surprises.",
  "Save tax legally with proactive year-round planning.",
  "Explain the 'why' so you actually understand your finances.",
  "Treat your books like my own — accurate and timely.",
];

function About() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About</span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl md:text-5xl">
            A CPA who turns US tax complexity into clear next steps.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gold/20 blur-2xl" />
            <img src={shivangi} alt="Shivangi Tankshali" className="relative aspect-square w-full rounded-2xl object-cover shadow-elegant" />
          </div>
          <div>
            <h2 className="font-serif text-3xl">Hi, I'm Shivangi.</h2>
            <div className="mt-5 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a licensed US CPA helping small businesses, founders, and individuals
                navigate US taxes with clarity and confidence.
              </p>
              <p>
                Most business owners overpay taxes or miss key compliance steps — not because
                they want to, but because the system is complex. That's where I come in.
              </p>
              <p>
                My goal is simple: <span className="text-foreground font-medium">help you stay
                compliant while saving as much tax as legally possible.</span> I work as an
                extension of your team — handling filings, planning, and advisory so you can focus
                on running your business.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {principles.map((p) => (
                <div key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Book a consultation
              </Link>
              <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://instagram.com" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent">
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
