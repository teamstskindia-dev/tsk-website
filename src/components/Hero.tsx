"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
  { value: "ACY-9086", label: "LLP Identification Number" },
  { value: "Meerut, UP", label: "Home base, national reach" },
  { value: "100%", label: "Ideas shipped as working products" },
];

const headingLine1 = ["We", "turn", "ambitious"];
const headingLine2 = ["ideas", "into", "working software."];

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

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-4 py-1.5 text-xs font-medium text-text-muted"
          >
            <Sparkles size={13} className="text-cyan" />
            Software &amp; digital engineering, built from Meerut
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingContainer}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
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
              {headingLine2.map((word) => (
                <span key={word} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-bottom">
                  <motion.span
                    variants={headingWord}
                    className={`inline-block ${word === "working software." ? "text-gradient" : ""}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
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
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo/10 transition-transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(100deg, var(--accent-indigo), var(--accent-cyan))",
              }}
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
            className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-lg font-semibold text-text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center"
        >
          {/* soft gradient halo behind the panel */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2.5rem] opacity-50 blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))",
            }}
          />

          <div className="relative aspect-square w-full max-w-[380px] overflow-hidden rounded-[2.5rem] border border-border bg-[#141414] shadow-2xl">
            {/* faint tech grid texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            {/* corner accent glows, matching brand gradient */}
            <div
              aria-hidden
              className="absolute -top-12 -right-12 h-48 w-48 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--accent-cyan)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-14 -left-14 h-48 w-48 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--accent-indigo)" }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-full w-full items-center justify-center p-12 pb-16"
            >
              <Image
                src="/tsk-logo-mark.png"
                alt="TSKINDIA Technology LLP"
                width={831}
                height={695}
                className="h-auto w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
                priority
              />
            </motion.div>

            {/* bottom wordmark strip */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 border-t border-white/10 bg-white/[0.02] py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(100deg, var(--accent-indigo), var(--accent-cyan))",
                }}
              />
              TSKINDIA Technology
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
