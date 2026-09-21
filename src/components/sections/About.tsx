import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Building professionally since", value: "Nov 2024" },
  { label: "Apps live on the stores", value: "6" },
  { label: "Languages", value: profile.languages },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading title="About" />
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            {profile.bio}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="divide-y divide-line/15 rounded-md border border-line/20 bg-surface/50">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="text-right font-mono text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
