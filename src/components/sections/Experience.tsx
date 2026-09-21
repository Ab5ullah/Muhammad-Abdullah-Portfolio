import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading title="Experience" />
      <ol className="relative border-l border-line/25 pl-8">
        {experience.map((entry, i) => (
          <Reveal as="li" key={entry.company} delay={i * 0.05} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-lg font-medium text-foreground">{entry.role}</h3>
              <span className="font-mono text-xs text-muted">{entry.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-muted">
              {entry.company}
              {entry.location ? `, ${entry.location}` : ""}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">
              {entry.summary}
            </p>
            {entry.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {entry.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line/60" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
