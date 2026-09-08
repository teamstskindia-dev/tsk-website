import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
          Legal
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h1>
        {updated && (
          <p className="mt-3 text-sm text-text-muted">Last updated: {updated}</p>
        )}

        <div className="legal-content mt-10 space-y-9 border-t border-border pt-10">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-lg font-semibold text-text-primary sm:text-xl">
        {number ? `${number}. ` : ""}
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-muted sm:text-base">
        {children}
      </div>
    </section>
  );
}
