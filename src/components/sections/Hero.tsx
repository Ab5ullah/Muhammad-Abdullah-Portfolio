"use client";

import Image from "next/image";
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
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
          className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12"
        >
          <div>
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
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
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
          </div>

          <motion.div
            variants={shouldReduceMotion ? undefined : item}
            className="flex justify-center lg:justify-end"
          >
            <div className="corner-brackets relative w-full max-w-[300px] sm:max-w-[330px] rounded-2xl border border-line/25 bg-surface/60 p-3 backdrop-blur shadow-xl">
              <span className="bracket-tl" aria-hidden="true" />
              <span className="bracket-tr" aria-hidden="true" />
              <span className="bracket-bl" aria-hidden="true" />
              <span className="bracket-br" aria-hidden="true" />

              <div
                className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-accent/15 blur-2xl dark:bg-accent/20"
                aria-hidden="true"
              />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-line/15 bg-surface">
                <Image
                  src="/images/abdullah.jpg"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, 300px"
                  className="object-cover object-top filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between rounded-lg border border-line/30 bg-background/90 px-3 py-2 backdrop-blur-md shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs font-medium text-foreground">Open to Roles</span>
                  </div>
                  <span className="font-mono text-[11px] text-accent font-medium">Flutter Eng</span>
                </div>
              </div>

              <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] font-mono text-muted">
                <span>{profile.name}</span>
                <span>7+ Mobile Apps</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
