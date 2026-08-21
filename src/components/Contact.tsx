"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, FileBadge, Send, CheckCircle2 } from "lucide-react";

const infoCards = [
  {
    icon: Mail,
    label: "Email us",
    value: "tskindiatechnology@gmail.com",
    href: "mailto:tskindiatechnology@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Shop No. 108, 109, S.B.J. Complex, Vedvyaspuri, Meerut - 250002",
  },
  {
    icon: FileBadge,
    label: "LLP identification number",
    value: "ACY-9086",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:tskindiatechnology@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
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
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
              Send a few details about the project and we&rsquo;ll reply with
              next steps, usually within a business day.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {infoCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-bg-elevated p-5 transition-colors hover:border-indigo/50">
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--accent-cyan-soft)" }}
                    >
                      <Icon size={18} className="text-cyan" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted">{card.label}</div>
                      <div className="mt-1 text-sm font-medium text-text-primary">
                        {card.value}
                      </div>
                    </div>
                  </div>
                );
                return card.href ? (
                  <a key={card.label} href={card.href}>
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl border border-border bg-bg-elevated p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium text-text-muted">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-indigo"
                  placeholder="Ankit Sharma"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-indigo"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-medium text-text-muted">
                Project details
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-indigo"
                placeholder="What are you looking to build?"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto cursor-pointer"
              style={{
                background:
                  "linear-gradient(100deg, var(--accent-indigo), var(--accent-cyan))",
              }}
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={16} /> Opening your mail app…
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>
            <p className="mt-3 text-xs text-text-muted">
              This opens your email app addressed to tskindiatechnology@gmail.com.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
