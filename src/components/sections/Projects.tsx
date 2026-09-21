import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-t border-line/10 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading
          title="Featured projects"
          description="Seven apps, three companies, one recurring job: take a product from a blank Flutter project to something real users open every day."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
