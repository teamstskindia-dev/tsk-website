"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

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

function StepItem({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const point = index / (total - 1);
  const rangeStart = Math.max(point - 0.08, 0);
  const rangeEnd = Math.min(point + 0.04, 1);

  const opacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]);
  const x = useTransform(scrollYProgress, [rangeStart, rangeEnd], [-40, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"
    >
      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated font-display text-sm font-semibold text-indigo">
        {step.step}
      </div>
      <div className="flex-1 border-b border-border pb-10 sm:pb-12">
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {step.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="process" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            How we work
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Five stages, one project owner throughout.
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-border sm:block"
          />
          <motion.div
            aria-hidden
            style={{
              scaleY: scrollYProgress,
              background:
                "linear-gradient(to bottom, var(--accent-indigo), var(--accent-cyan))",
            }}
            className="absolute left-[27px] top-2 bottom-2 hidden w-px origin-top sm:block"
          />
          <div className="flex flex-col gap-10 sm:gap-12">
            {steps.map((s, i) => (
              <StepItem
                key={s.step}
                step={s}
                index={i}
                total={steps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
