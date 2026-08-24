"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "Direct access to the builders",
    desc: "You talk to the people actually writing your code, not an account manager relaying messages.",
  },
  {
    title: "Small, focused team",
    desc: "We take on fewer projects at a time so each one gets real attention, not divided attention.",
  },
  {
    title: "Clear communication",
    desc: "Regular updates and honest scoping, so you always know where the project stands.",
  },
  {
    title: "Support after launch",
    desc: "We stay reachable for fixes and small improvements after the invoice is paid.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
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
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              A Small Technology Team That Builds Things It Would Be Proud
              To Use Itself.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              TSKINDIA Technology LLP is an IT company working with
              businesses across India on websites, software and digital
              products. We keep teams small
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
              Why teams choose us
            </h3>
            <ul className="mt-6 space-y-6">
              {highlights.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-3 border-b border-border pb-5 last:border-none last:pb-0"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-cyan"
                    strokeWidth={1.8}
                  />
                  <div>
                    <div className="font-display text-base font-bold tracking-tight text-text-primary">
                      {item.title}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
