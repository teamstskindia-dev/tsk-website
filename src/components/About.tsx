"use client";

import { motion } from "framer-motion";

const details = [
  { label: "Registered name", value: "TSKINDIA TECHNOLOGY LLP" },
  { label: "LLP identification number", value: "ACY-9086" },
  { label: "Email", value: "tskindiatechnology@gmail.com" },
  {
    label: "Address",
    value: "Shop No. 108, 109, S.B.J. Complex, Vedvyaspuri, Meerut - 250002",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              About TSKINDIA
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              A small technology team that builds things it would be proud
              to use itself.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              TSKINDIA Technology LLP is an IT company based in Meerut,
              Uttar Pradesh, working with businesses across India on
              websites, software and digital products. We keep teams small
              on purpose, so every project gets direct attention from the
              people actually writing the code.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              From the first conversation about what a product should do, to
              the infrastructure that keeps it running after launch, our
              approach stays the same: understand the problem properly,
              build it well, and stay reachable after the invoice is paid.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Reliable", "Transparent", "Hands-on"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-bg-soft px-4 py-1.5 text-xs font-medium text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-8 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-cyan), transparent 70%)",
              }}
            />
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-text-muted">
              Company details
            </h3>
            <dl className="mt-6 space-y-6">
              {details.map((item) => (
                <div key={item.label} className="border-b border-border pb-5 last:border-none last:pb-0">
                  <dt className="text-xs text-text-muted">{item.label}</dt>
                  <dd className="mt-1.5 font-display text-base font-medium text-text-primary sm:text-lg">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
