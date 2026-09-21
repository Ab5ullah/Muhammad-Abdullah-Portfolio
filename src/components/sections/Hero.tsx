"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Download, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-blueprint-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
      <div className="relative mx-auto flex max-w-5xl flex-col px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : item}
            className="mb-6 flex flex-wrap items-center gap-2"
          >
            <Tag className="flex items-center gap-1.5 py-1.5">
              <MapPin className="h-3 w-3" strokeWidth={1.75} />
              {profile.location}
            </Tag>
            <Tag className="py-1.5">{profile.availability}</Tag>
          </motion.div>

          <motion.h1
            variants={shouldReduceMotion ? undefined : item}
            className="max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.subhead}
          </motion.p>

          <motion.div
            variants={shouldReduceMotion ? undefined : item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">View projects</Button>
            <Button
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              icon={<Download className="h-3.5 w-3.5" strokeWidth={1.75} />}
            >
              Download CV
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              icon={<Send className="h-3.5 w-3.5" strokeWidth={1.75} />}
            >
              Contact me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
