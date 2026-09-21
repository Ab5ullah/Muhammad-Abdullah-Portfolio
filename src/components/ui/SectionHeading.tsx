export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-xl">
      <div className="mb-3 flex items-center gap-2 text-line/70">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="text-accent">
          <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
