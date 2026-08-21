"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn the business, the users and the constraint that matters most before touching any design.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes and visual design get shaped around real content, then tested against the goal.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Clean, documented code, built in short cycles so you see progress every week, not just at the end.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Deployment, monitoring and a handover that leaves your team able to run things confidently.",
  },
  {
    step: "05",
    title: "Support",
    desc: "We stay on for fixes, small improvements and the occasional 3am question, if it ever comes up.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            How we work
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Five stages, one project owner throughout.
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-border sm:block"
          />
          <div className="flex flex-col gap-10 sm:gap-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"
              >
                <div
                  className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated font-display text-sm font-semibold text-indigo"
                >
                  {s.step}
                </div>
                <div className="flex-1 border-b border-border pb-10 sm:pb-12">
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
