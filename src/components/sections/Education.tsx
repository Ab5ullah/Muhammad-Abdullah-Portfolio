import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/skills";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading title="Education" />
      <div className="space-y-4">
        {education.map((entry) => (
          <Reveal key={entry.degree}>
            <div className="flex flex-col justify-between gap-1 rounded-md border border-line/20 px-5 py-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-base font-medium text-foreground">
                  {entry.degree}
                </h3>
                <p className="text-sm text-muted">{entry.institution}</p>
              </div>
              <span className="font-mono text-xs text-muted">{entry.period}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
