import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Tag } from "./Tag";

const platformLabel: Record<Project["links"][number]["platform"], string> = {
  ios: "App Store",
  android: "Google Play",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="corner-brackets group relative flex flex-col justify-between rounded-md border border-line/20 bg-surface/60 p-6 transition-colors hover:border-line/40">
      <span className="bracket-tl" aria-hidden="true" />
      <span className="bracket-tr" aria-hidden="true" />
      <span className="bracket-bl" aria-hidden="true" />
      <span className="bracket-br" aria-hidden="true" />

      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5">
            {project.image && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-line/20 bg-surface shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={`${project.name} icon`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-muted">{project.company}</p>
            </div>
          </div>
          {project.status === "in-review" && (
            <Tag className="shrink-0 border-accent/40 text-accent">In review</Tag>
          )}
        </div>

        <p className="mt-3 text-sm font-medium text-foreground/80">{project.tagline}</p>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <span className="font-mono text-[11px] text-accent font-medium">{project.role}</span>
          <span className="h-3 border-l border-line/30" aria-hidden="true" />
          <span>{project.platform}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>



      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4 border-t border-line/15 pt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {platformLabel[link.platform]}
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
