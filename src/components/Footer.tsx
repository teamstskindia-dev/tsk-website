"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Mail, MapPin, Clock } from "lucide-react";

const companyLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/#services", label: "Web development" },
  { href: "/#services", label: "Mobile apps" },
  { href: "/#services", label: "UI/UX design" },
  { href: "/#services", label: "Cloud & DevOps" },
  { href: "/#services", label: "IT consulting" },
  { href: "/#services", label: "Product growth" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 3H21l-6.4 7.3L22 21h-6.1l-4.8-6.3L5.6 21H3.4l6.8-7.8L2.6 3h6.2l4.3 5.8L18.9 3Zm-1 16.2h1.2L8.2 4.7H6.9l11 14.5Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "GitHub", href: "#", Icon: GitHubIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* ambient background glow, echoes the hero */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-indigo), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -top-24 right-[-10%] h-[360px] w-[360px] rounded-full opacity-15 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-cyan), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-indigo), var(--accent-cyan), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative -mt-px overflow-hidden rounded-3xl border border-border bg-bg-elevated px-7 py-10 shadow-xl sm:px-10"
          style={{ marginTop: "3.5rem" }}
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
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-[90px]"
            style={{
              background:
                "radial-gradient(circle, var(--accent-indigo), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm text-text-muted sm:text-base">
                Let&rsquo;s turn it into working software.
              </p>
            </div>
            <Link
              href="/#contact"
              className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-indigo/90"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* main grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.5fr_0.7fr_0.75fr_2.1fr] lg:gap-8"
        >
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-bg-soft">
                <Image
                  src="/tsk_logo-trans.png"
                  alt="TSKINDIA Technology LLP logo"
                  fill
                  className="object-contain p-1"
                />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight text-text-primary">
                TSKINDIA <span className="font-normal text-text-muted">Technology</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted">
              We design and build websites, software and digital products for
              businesses ready to grow online — one team, from first sketch
              to the day it ships.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:-translate-y-0.5 hover:border-indigo hover:text-indigo"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex h-9 items-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Company
            </div>
            <ul className="mt-5 flex flex-col gap-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-cyan opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex h-9 items-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Services
            </div>
            <ul className="mt-5 flex flex-col gap-1">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-indigo opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex h-9 items-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Legal
            </div>
            <ul className="mt-5 flex flex-col gap-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-cyan opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex h-9 items-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Get in touch
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href="mailto:tskindiatechnology@gmail.com"
                  className="group flex items-start gap-2.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                    style={{ background: "var(--accent-cyan-soft)" }}
                  >
                    <Mail size={14} className="text-cyan" strokeWidth={1.8} />
                  </span>
                  <span className="mt-1.5 break-all">tskindiatechnology@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-text-muted">
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent-indigo-soft)" }}
                >
                  <MapPin size={14} className="text-indigo" strokeWidth={1.8} />
                </span>
                <address className="mt-1.5 not-italic text-balance">
                  Shop No. 108,109, S.B.J COMPLEX VEDVYAS PUR, Rly. Road Meerut,
                  Railway Road Police Station, Meerut 250002, Uttar Pradesh, India
                </address>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-text-muted">
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent-cyan-soft)" }}
                >
                  <Clock size={14} className="text-cyan" strokeWidth={1.8} />
                </span>
                <span className="mt-1.5">Usually reply within a business day</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-text-muted sm:flex-row"
        >
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p>
              © {new Date().getFullYear()} TSKINDIA Technology LLP. All rights reserved.
            </p>
            <p className="text-text-muted/70">Designed &amp; built in-house, with care.</p>
          </div>
          <Link
            href="/#top"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-border py-2 pl-3 pr-2 text-text-muted transition-all hover:border-indigo hover:text-text-primary"
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium transition-all duration-300 group-hover:max-w-[80px]">
              Back to top
            </span>
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUp size={14} />
            </span>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
