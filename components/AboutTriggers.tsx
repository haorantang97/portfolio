"use client";

import { useState } from "react";
import { AboutOverlay } from "./AboutOverlay";

type Props = {
  experienceLabel: string;
  skillsLabel: string;
  closeLabel: string;
  experienceContent: React.ReactNode;
  skillsContent: React.ReactNode;
};

export function AboutTriggers({
  experienceLabel,
  skillsLabel,
  closeLabel,
  experienceContent,
  skillsContent,
}: Props) {
  const [open, setOpen] = useState<"exp" | "skl" | null>(null);

  return (
    <>
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 font-sans text-[16px] md:text-[18px]">
        <button
          type="button"
          onClick={() => setOpen("exp")}
          className="group relative inline-block text-[var(--color-ink)]"
        >
          {experienceLabel}
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
            style={{ background: "var(--gradient-gold)" }}
          />
        </button>
        <span aria-hidden="true" className="text-[var(--color-ink-secondary)]">
          ·
        </span>
        <button
          type="button"
          onClick={() => setOpen("skl")}
          className="group relative inline-block text-[var(--color-ink)]"
        >
          {skillsLabel}
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-0.5 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
            style={{ background: "var(--gradient-gold)" }}
          />
        </button>
      </div>

      <AboutOverlay
        open={open === "exp"}
        onClose={() => setOpen(null)}
        closeLabel={closeLabel}
      >
        {experienceContent}
      </AboutOverlay>
      <AboutOverlay
        open={open === "skl"}
        onClose={() => setOpen(null)}
        closeLabel={closeLabel}
      >
        {skillsContent}
      </AboutOverlay>
    </>
  );
}
