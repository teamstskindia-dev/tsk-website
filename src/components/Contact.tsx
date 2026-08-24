"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  User,
  MessageSquare,
  ChevronDown,
  Globe,
  Smartphone,
  Palette,
  Headset,
  Sparkles,
  FileText,
  PhoneCall,
} from "lucide-react";

const fieldContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fieldItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const projectTypes = [
  { icon: Globe, label: "Website" },
  { icon: Smartphone, label: "Mobile app" },
  { icon: Palette, label: "UI/UX design" },
  { icon: Headset, label: "Consulting" },
  { icon: Sparkles, label: "Something else" },
];

const budgets = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

const steps = [
  {
    icon: FileText,
    title: "Share your brief",
    desc: "Tell us what you're building and any must-haves you already have in mind.",
  },
  {
    icon: Mail,
    title: "We review & reply",
    desc: "Usually within a business day, with questions or next steps.",
  },
  {
    icon: PhoneCall,
    title: "Kick-off call",
    desc: "We align on scope, timeline and budget before anyone writes code.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${projectType ? `${projectType} enquiry` : "Project enquiry"} from ${
        form.name || "website"
      }`
    );
    const bodyLines = [
      form.message,
      "",
      projectType ? `Project type: ${projectType}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      `— ${form.name} (${form.email})`,
    ].filter((line) => line !== null);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:tskindiatechnology@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient background glow, slow drift */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-indigo), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -25, 0], y: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-0 right-[-10%] h-[360px] w-[360px] rounded-full opacity-15 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-cyan), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
              Send a few details about the project and we&rsquo;ll reply with
              next steps, usually within a business day.
            </p>

            {/* how it works — vertical step timeline */}
            <div className="relative mt-11 space-y-7">
              <motion.div
                aria-hidden
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6 + (steps.length - 1) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-5 left-4.75 top-5 w-px origin-top"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--accent-indigo), var(--accent-cyan))",
                  opacity: 0.25,
                }}
              />
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex gap-4"
                  >
                    <div
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated shadow-sm"
                    >
                      <Icon size={16} className="text-indigo" strokeWidth={1.8} />
                    </div>
                    <div className="pt-1.5">
                      <div className="font-display text-sm font-semibold text-text-primary">
                        {step.title}
                      </div>
                      <p className="mt-1 max-w-sm text-sm leading-relaxed text-text-muted">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="mailto:tskindiatechnology@gmail.com"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-indigo"
            >
              <Mail size={15} strokeWidth={1.8} />
              Prefer email? Write to tskindiatechnology@gmail.com
              <span className="text-indigo opacity-0 transition-opacity group-hover:opacity-100">
                &rarr;
              </span>
            </motion.a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-7 shadow-xl sm:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--accent-indigo), var(--accent-cyan), transparent)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <motion.div
              variants={fieldContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative flex flex-col gap-5"
            >
              <motion.div variants={fieldItem} className="flex flex-col gap-2.5">
                <label className="text-xs font-medium text-text-muted">
                  What are you looking to build?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const Icon = type.icon;
                    const active = projectType === type.label;
                    return (
                      <button
                        key={type.label}
                        type="button"
                        onClick={() =>
                          setProjectType(active ? null : type.label)
                        }
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                          active
                            ? "border-transparent text-white shadow-sm"
                            : "border-border bg-bg text-text-muted hover:border-indigo/50 hover:text-text-primary"
                        }`}
                        style={
                          active
                            ? {
                                background:
                                  "linear-gradient(100deg, var(--accent-indigo), var(--accent-cyan))",
                              }
                            : undefined
                        }
                      >
                        <Icon size={13} strokeWidth={1.8} />
                        {type.label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <motion.div variants={fieldItem} className="group flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-medium text-text-muted">
                    Your name
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within:text-indigo"
                    />
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-bg py-3 pl-11 pr-4 text-sm text-text-primary outline-none transition-all focus:border-indigo focus:shadow-[0_0_0_4px_var(--accent-indigo-soft)]"
                      placeholder="Ankit Sharma"
                    />
                  </div>
                </motion.div>
                <motion.div variants={fieldItem} className="group flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-medium text-text-muted">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within:text-indigo"
                    />
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-bg py-3 pl-11 pr-4 text-sm text-text-primary outline-none transition-all focus:border-indigo focus:shadow-[0_0_0_4px_var(--accent-indigo-soft)]"
                      placeholder="you@company.com"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fieldItem} className="group flex flex-col gap-2">
                <label htmlFor="budget" className="text-xs font-medium text-text-muted">
                  Estimated budget{" "}
                  <span className="text-text-muted/60">(optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-border bg-bg py-3 pl-4 pr-10 text-sm text-text-primary outline-none transition-all focus:border-indigo focus:shadow-[0_0_0_4px_var(--accent-indigo-soft)]"
                  >
                    <option value="">Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />
                </div>
              </motion.div>

              <motion.div variants={fieldItem} className="group flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium text-text-muted">
                  Project details
                </label>
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="pointer-events-none absolute left-4 top-4 text-text-muted transition-colors group-focus-within:text-indigo"
                  />
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border bg-bg py-3 pl-11 pr-4 text-sm text-text-primary outline-none transition-all focus:border-indigo focus:shadow-[0_0_0_4px_var(--accent-indigo-soft)]"
                    placeholder="What are you looking to build?"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo/10 sm:w-auto cursor-pointer"
              style={{
                background:
                  "linear-gradient(100deg, var(--accent-indigo), var(--accent-cyan))",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {submitted ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} /> Opening your mail app…
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Send size={16} /> Send message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <p className="relative mt-3 text-xs text-text-muted">
              This opens your email app addressed to tskindiatechnology@gmail.com.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
