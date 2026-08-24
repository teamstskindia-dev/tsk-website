"use client";

import { motion, type Variants } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  ShieldCheck,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web development",
    desc: "Fast, SEO-friendly websites and web apps built on modern frameworks and clean code.",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    desc: "Native-feel Android and iOS apps designed around how your customers actually use their phones.",
  },
  {
    icon: Palette,
    title: "UI/UX design",
    desc: "Interfaces that are easy to use on the first try, with a visual language that matches your brand.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deployment, hosting and infrastructure set up so your product stays fast as it scales.",
  },
  {
    icon: ShieldCheck,
    title: "IT consulting",
    desc: "Practical guidance on tools, architecture and security for teams making technology decisions.",
  },
  {
    icon: LineChart,
    title: "Product growth",
    desc: "Ongoing support and iteration after launch, so the product keeps improving with real usage.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Everything A Growing Business Needs To Run On Great Software.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Every engagement is scoped around one goal: shipping something
            reliable that your team can actually maintain and grow.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated p-7 shadow-sm transition-colors duration-300 hover:border-indigo/40 hover:shadow-xl hover:shadow-indigo/5"
              >
                {/* corner glow, revealed on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))",
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))",
                    }}
                  >
                    <Icon size={21} className="text-white" strokeWidth={1.8} />
                  </div>
                  <span className="font-display text-xs font-semibold tracking-wide text-text-muted/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-text-primary">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 text-[15px] font-normal leading-[1.7] text-text-muted">
                  {service.desc}
                </p>

                <div className="relative mt-5 flex items-center gap-1.5 text-xs font-semibold text-indigo opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
