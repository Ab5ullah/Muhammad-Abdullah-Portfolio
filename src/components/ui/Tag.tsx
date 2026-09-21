import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-line/25 px-2 py-1 font-mono text-[0.7rem] leading-none text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
