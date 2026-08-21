"use client";

import { motion, type Variants } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  ShieldCheck,
  LineChart,
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
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Everything a growing business needs to run on great software.
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
                className="group relative rounded-2xl border border-border bg-bg-elevated p-7 transition-colors hover:border-indigo/50"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "var(--accent-indigo-soft)" }}
                >
                  <Icon size={20} className="text-indigo" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
