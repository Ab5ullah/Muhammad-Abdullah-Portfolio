"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the visible email text still works as a fallback.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address"
      className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" strokeWidth={1.75} />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
          Copy
        </>
      )}
    </button>
  );
}
