import Image from "next/image";
import { ArrowUpRight, ArrowUp, Mail, MapPin, FileBadge } from "lucide-react";

const companyLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* ambient background glow, echoes the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-indigo), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[360px] w-[360px] rounded-full opacity-15 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-cyan), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* CTA strip */}
        <div className="flex flex-col items-center gap-6 border-b border-border py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm text-text-muted sm:text-base">
              Let&rsquo;s turn it into working software.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo/10 transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(100deg, var(--accent-indigo), var(--accent-cyan))",
            }}
          >
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:gap-8">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-bg-soft">
                <Image
                  src="/tsk-logo.png"
                  alt="TSKINDIA Technology LLP logo"
                  fill
                  className="object-contain p-1"
                />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight text-text-primary">
                TSKINDIA <span className="font-normal text-text-muted">Technology</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted">
              We design and build websites, software and digital products for
              businesses ready to grow online — one team, from first sketch
              to the day it ships.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-3 py-1.5 text-xs font-medium text-text-muted">
              <FileBadge size={13} className="text-cyan" />
              LLPIN ACY-9086
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Company
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Legal
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Get in touch
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href="mailto:tskindiatechnology@gmail.com"
                  className="group flex items-start gap-2.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-cyan" strokeWidth={1.8} />
                  tskindiatechnology@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-text-muted">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-cyan" strokeWidth={1.8} />
                Shop No. 108, 109, S.B.J. Complex, Vedvyaspuri, Meerut - 250002
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} TSKINDIA Technology LLP. All rights reserved.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:-translate-y-0.5 hover:border-indigo hover:text-text-primary"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
