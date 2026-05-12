"use client";

import { useState } from "react";
import { t, ui, type Locale } from "@/lib/i18n";

type Props = {
  publicKey: string;
  poster?: string;
  device?: string;
  osVersion?: string;
  locale?: Locale;
};

export function AppetizeEmbed({
  publicKey,
  poster,
  device = "iphone15pro",
  osVersion = "17.0",
  locale = "en",
}: Props) {
  const [launched, setLaunched] = useState(false);

  const aspect = "9 / 19.5";

  if (launched) {
    return (
      <div
        className="mx-auto w-full max-w-[360px]"
        style={{ aspectRatio: aspect }}
      >
        <iframe
          src={`https://appetize.io/embed/${publicKey}?device=${device}&osVersion=${osVersion}&autoplay=true&scale=auto&deviceColor=black`}
          allow="fullscreen; autoplay; clipboard-write"
          loading="lazy"
          className="block h-full w-full border-0"
          title="Pronto . Art live demo"
        />
      </div>
    );
  }

  return (
    <div
      className="mx-auto w-full max-w-[320px] md:max-h-[calc(100dvh-12rem)]"
      style={{ aspectRatio: aspect }}
    >
      <button
        type="button"
        onClick={() => setLaunched(true)}
        className="group relative block h-full w-full overflow-hidden bg-[var(--color-ink)] text-[var(--color-bg)] transition-opacity focus-visible:outline-none"
      >
        {poster ? (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-50"
          />
        ) : null}
        <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
          <span className="font-sans text-[15px] font-light uppercase tracking-[0.08em]">
            {t(ui.launchDemo, locale)}
          </span>
          <span className="mt-3 max-w-[26ch] font-sans text-[11px] font-light leading-[1.5] tracking-[0.03em] opacity-70">
            {t(ui.demoNote, locale)}
          </span>
        </div>
      </button>
    </div>
  );
}
