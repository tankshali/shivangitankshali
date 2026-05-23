import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Linkedin, Instagram, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shivangi Tankshali, CPA" },
      { name: "description", content: "Book a consultation with Shivangi Tankshali, licensed US CPA. Email cashivangitankshali@gmail.com or call +91 99251 93737." },
      { property: "og:title", content: "Contact Shivangi Tankshali, CPA" },
      { property: "og:description", content: "Book a quick consultation about your US tax situation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:cashivangitankshali@gmail.com?subject=${encodeURIComponent(
      "Consultation Request — " + (form.topic || "General")
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl md:text-5xl">Let's talk about your taxes.</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Share a bit about your situation and I'll get back within 1–2 business days.
            Prefer to talk now? Call or email directly — both work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          {/* Contact cards */}
          <div className="space-y-4">
            <a href="mailto:cashivangitankshali@gmail.com" className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary"><Mail size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Email</p>
                <p className="mt-1 font-medium text-foreground">cashivangitankshali@gmail.com</p>
              </div>
            </a>
            <a href="tel:+919925193737" className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary"><Phone size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Phone</p>
                <p className="mt-1 font-medium text-foreground">+91 99251 93737</p>
              </div>
            </a>
            <div className="rounded-xl border border-border bg-secondary/40 p-5">
              <p className="text-sm font-medium text-foreground">Follow for tax tips</p>
              <p className="mt-1 text-sm text-muted-foreground">Weekly videos on US taxation for individuals and businesses.</p>
              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/in/shivangi-tankshali-1534171a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-border bg-card p-2.5 hover:text-primary"><Linkedin size={16} /></a>
                <a href="https://www.instagram.com/shivangi_tankshali/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md border border-border bg-card p-2.5 hover:text-primary"><Instagram size={16} /></a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="font-serif text-2xl">Book a consultation</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell me a little about what you need.</p>

            {sent ? (
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 text-gold" size={18} />
                <p>Your email client just opened with your message. Send it over and I'll reply within 1–2 business days.</p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4">
                <Field label="Your name">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Jane Doe" />
                </Field>
                <Field label="Email">
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="jane@company.com" />
                </Field>
                <Field label="What do you need help with?">
                  <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className={inputCls}>
                    <option value="">Select a topic…</option>
                    <option>Personal Tax Filing</option>
                    <option>Business Tax Filing</option>
                    <option>LLC / S-Corp Setup</option>
                    <option>Bookkeeping & Payroll</option>
                    <option>Sales Tax Compliance</option>
                    <option>Advisory & Tax Planning</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Tell me more">
                  <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} placeholder="Brief context about your situation…" />
                </Field>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  <Send size={16} /> Send message
                </button>
                <p className="text-xs text-muted-foreground">Submitting opens your email app pre-filled — no data is stored on this site.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
