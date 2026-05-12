"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
  children: React.ReactNode;
};

export function AboutOverlay({ open, onClose, closeLabel, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onClick={onClose}
      className={`fixed inset-0 z-40 transition-opacity duration-500 ease-out ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        background: "rgba(254, 254, 253, 0.62)",
        backdropFilter: "blur(14px) saturate(130%)",
        WebkitBackdropFilter: "blur(14px) saturate(130%)",
      }}
    >
      {/* Scrollable content layer */}
      <div className="h-full w-full overflow-y-auto">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`mx-auto max-w-[680px] px-6 py-24 transition-all duration-[600ms] ease-out md:px-12 md:py-32 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>

    </div>
  );
}
