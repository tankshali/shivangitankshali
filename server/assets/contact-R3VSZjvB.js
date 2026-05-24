import { Q as reactExports, I as jsxRuntimeExports } from "./server-CnfsJweq.js";
import { c as createLucideIcon, M as Mail, P as Phone, a as Linkedin, I as Instagram } from "./router-DkApttGC.js";
import { C as CircleCheck } from "./circle-check-DppXmr4M.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}
Email: ${form.email}
Topic: ${form.topic}

${form.message}`);
    window.location.href = `mailto:cashivangitankshali@gmail.com?subject=${encodeURIComponent("Consultation Request — " + (form.topic || "General"))}&body=${body}`;
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hero-gradient text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-20 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl font-serif text-4xl md:text-5xl", children: "Let's talk about your taxes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-primary-foreground/80", children: "Share a bit about your situation and I'll get back within 1–2 business days. Prefer to talk now? Call or email directly — both work." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:cashivangitankshali@gmail.com", className: "flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.16em] text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-medium text-foreground", children: "cashivangitankshali@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+919925193737", className: "flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.16em] text-muted-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-medium text-foreground", children: "+91 99251 93737" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/40 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Follow for tax tips" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Weekly videos on US taxation for individuals and businesses." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/shivangi-tankshali-1534171a3/", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "rounded-md border border-border bg-card p-2.5 hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/shivangi_tankshali/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "rounded-md border border-border bg-card p-2.5 hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl", children: "Book a consultation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Tell me a little about what you need." }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-start gap-3 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 text-gold", size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your email client just opened with your message. Send it over and I'll reply within 1–2 business days." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), className: inputCls, placeholder: "Jane Doe" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), className: inputCls, placeholder: "jane@company.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What do you need help with?", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.topic, onChange: (e) => setForm({
            ...form,
            topic: e.target.value
          }), className: inputCls, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a topic…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Personal Tax Filing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Business Tax Filing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "LLC / S-Corp Setup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bookkeeping & Payroll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sales Tax Compliance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Advisory & Tax Planning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tell me more", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: inputCls, placeholder: "Brief context about your situation…" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
            " Send message"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Submitting opens your email app pre-filled — no data is stored on this site." })
        ] })
      ] })
    ] }) })
  ] });
}
const inputCls = "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground", children: label }),
    children
  ] });
}
export {
  Contact as component
};
