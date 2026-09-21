import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line/10 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading
          title="Skills"
          description="The stack behind every project below — refined across seven shipped apps."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="h-full rounded-md border border-line/20 p-5">
                <h3 className="mb-3 font-display text-sm font-medium text-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
