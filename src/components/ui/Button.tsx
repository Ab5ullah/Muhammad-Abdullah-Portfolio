import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-body text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-accent text-accent-foreground hover:bg-accent/90",
        variant === "secondary" &&
          "border border-line/30 text-foreground hover:border-accent hover:text-accent",
        className
      )}
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}
