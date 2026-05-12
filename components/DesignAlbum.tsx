"use client";

import { useEffect, useState } from "react";
import type { DesignImage } from "@/content/design";

type Props = {
  images: DesignImage[];
};

export function DesignAlbum({ images }: Props) {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!previewSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewSrc(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [previewSrc]);

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4 lg:gap-6">
        {images.map((img, i) =>
          img.src ? (
            <button
              key={i}
              type="button"
              onClick={() => setPreviewSrc(img.src!)}
              className="mb-3 block w-full overflow-hidden break-inside-avoid border border-black/10 transition-opacity hover:opacity-85 focus:outline-none focus-visible:border-black/40 md:mb-5 lg:mb-6"
            >
              <img
                src={img.src}
                alt=""
                aria-hidden="true"
                className="block h-auto w-full"
              />
            </button>
          ) : null,
        )}
      </div>

      {/* Preview modal — translucent backdrop, centered image, click outside / Esc to close */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!previewSrc}
        onClick={() => setPreviewSrc(null)}
        className={`fixed inset-0 z-40 flex items-center justify-center px-6 py-10 transition-opacity duration-300 ease-out md:px-16 md:py-16 ${
          previewSrc
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{
          background: "rgba(26, 24, 20, 0.32)",
          backdropFilter: "blur(8px) saturate(115%)",
          WebkitBackdropFilter: "blur(8px) saturate(115%)",
        }}
      >
        {previewSrc ? (
          <img
            src={previewSrc}
            alt=""
            aria-hidden="true"
            onClick={(e) => e.stopPropagation()}
            className={`max-h-[80vh] max-w-[min(640px,86vw)] object-contain shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out ${
              previewSrc ? "scale-100" : "scale-95"
            }`}
          />
        ) : null}
      </div>
    </>
  );
}
