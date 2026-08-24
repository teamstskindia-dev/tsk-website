"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Layers,
} from "lucide-react";

const headingLine1 = ["We", "Turn", "Ambitious"];
const headingLine2 = ["Ideas", "Into", "Working Software."];

const quickTags = [
  { icon: Code2, label: "Web" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Palette, label: "Design" },
  { icon: Cloud, label: "Cloud" },
];

const panelCards = [
  {
    icon: Code2,
    alt: "Development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop",
  },
  {
    icon: Palette,
    alt: "Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=400&auto=format&fit=crop",
  },
  {
    icon: Layers,
    alt: "Cloud infrastructure",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
  },
];

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const headingWord: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gradientWord = "Working Software.";
const gradientWordDelay = 0.55;

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: [18, -8, 0],
    transition: {
      delay: gradientWordDelay + i * 0.055,
      duration: 1,
      times: [0, 0.5, 1],
      ease: "easeInOut",
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-indigo), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-cyan), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingContainer}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
          >
            <span className="block">
              {headingLine1.map((word) => (
                <span key={word} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-bottom">
                  <motion.span variants={headingWord} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block">
              {headingLine2.map((word) =>
                word === gradientWord ? (
                  <span
                    key={word}
                    className="mr-[0.28em] inline-block pb-1 align-bottom"
                  >
                    {word.split("").map((char, i) => (
                      <motion.span
                        key={`${char}-${i}`}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char === " " ? " " : char}
                      </motion.span>
                    ))}
                  </span>
                ) : (
                  <span key={word} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-bottom">
                    <motion.span variants={headingWord} className="inline-block">
                      {word}
                    </motion.span>
                  </span>
                )
              )}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 max-w-xl font-display text-base font-light leading-relaxed tracking-wide text-text-muted sm:text-lg"
          >
            TSKINDIA Technology LLP designs and builds websites, software and
            digital products for businesses that are ready to grow online.
            One team, from first sketch to the day it ships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-indigo/90"
            >
              Get a free consultation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-indigo"
            >
              See what we build
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-8"
          >
            {quickTags.map((tag) => {
              const Icon = tag.icon;
              return (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-3.5 py-2 text-xs font-medium text-text-muted"
                >
                  <Icon size={14} className="text-cyan" strokeWidth={1.8} />
                  {tag.label}
                </span>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md self-start lg:mt-8"
        >
          {/* soft gradient halo behind the panel */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2.5rem] opacity-40 blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))",
            }}
          />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-7 shadow-2xl sm:p-8">
            {/* faint tech grid texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* window chrome */}
            <div className="relative flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5fd68e]/70" />
            </div>

            {/* mock content */}
            <div className="relative mt-6 space-y-3">
              <div
                className="h-3.5 w-2/3 rounded-full"
                style={{
                  background:
                    "linear-gradient(100deg, var(--accent-indigo), var(--accent-cyan))",
                }}
              />
              <div className="h-2.5 w-full rounded-full bg-bg-soft" />
              <div className="h-2.5 w-5/6 rounded-full bg-bg-soft" />
            </div>

            <div className="relative mt-6 grid grid-cols-3 gap-3">
              {panelCards.map(({ icon: Icon, alt, image }, i) => (
                <div
                  key={alt}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-bg-soft"
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute bottom-1.5 left-1.5 flex h-6 w-6 items-center justify-center rounded-md bg-white/90 backdrop-blur-sm">
                    <Icon size={13} className="text-indigo" strokeWidth={1.8} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* floating badge — top right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 flex items-center gap-2.5 rounded-2xl border border-border bg-bg-elevated px-4 py-3 shadow-xl sm:-right-8"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: "var(--accent-indigo-soft)" }}
            >
              <Zap size={15} className="text-indigo" strokeWidth={1.8} />
            </span>
            <span className="text-xs font-semibold text-text-primary">
              Fast delivery
            </span>
          </motion.div>

          {/* floating badge — bottom left */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -bottom-6 -left-4 flex items-center gap-2.5 rounded-2xl border border-border bg-bg-elevated px-4 py-3 shadow-xl sm:-left-8"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: "var(--accent-cyan-soft)" }}
            >
              <Code2 size={15} className="text-cyan" strokeWidth={1.8} />
            </span>
            <span className="text-xs font-semibold text-text-primary">
              Clean code
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
