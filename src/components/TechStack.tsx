"use client";

import { motion, type Variants } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiFigma,
  SiVercel,
  SiExpress,
  SiGraphql,
  SiRedis,
  SiMysql,
  SiPython,
  SiFirebase,
  SiGooglecloud,
  SiKubernetes,
  SiGithub,
  SiHtml5,
  SiSass,
  SiVuedotjs,
  SiFlutter,
  SiSwift,
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "var(--text-primary)" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "var(--text-primary)" },
  { name: "Express", icon: SiExpress, color: "var(--text-primary)" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "GitHub", icon: SiGithub, color: "var(--text-primary)" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Swift", icon: SiSwift, color: "#F05138" },
];

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035 },
  },
};

const headingChar: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative -mt-10 pb-16 sm:-mt-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headingContainer}
          className="inline-block text-2xl font-bold uppercase tracking-[0.18em] text-black sm:text-3xl"
        >
          {"Tech we build with".split("").map((char, i) => (
            <motion.span key={i} variants={headingChar} className="inline-block">
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.span>
      </div>

      <div
        className="relative mt-8 flex h-40 items-center overflow-hidden sm:h-48"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          className="flex flex-none items-center gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <span
                key={`${tech.name}-${i}`}
                className="inline-flex flex-none items-center gap-3 rounded-2xl border border-border bg-bg-soft px-6 py-5 text-base font-semibold text-text-primary"
              >
                <Icon size={26} style={{ color: tech.color }} />
                {tech.name}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
