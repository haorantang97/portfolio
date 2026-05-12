import Link from "next/link";
import { about } from "@/content/about";
import { AboutTriggers } from "@/components/AboutTriggers";
import { t, ui } from "@/lib/i18n";
import { getLocale } from "@/lib/locale-server";

export default function AboutPage() {
  const locale = getLocale();

  const experienceContent = (
    <div>
      <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-secondary)]">
        {t(about.experienceLabel, locale)}
      </h2>
      <div className="mt-10 space-y-14">
        {about.experiences.map((exp, i) => (
          <article key={i}>
            <h3 className="font-sans text-[24px] font-light leading-[1.2] tracking-[-0.005em] text-[var(--color-ink)] md:text-[28px]">
              {t(exp.org, locale)}
            </h3>
            <p className="mt-2 font-sans text-[13px] italic text-[var(--color-ink-secondary)] md:text-[14px]">
              {t(exp.roles, locale)}
            </p>
            <p className="mt-1 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
              {t(exp.period, locale)}
            </p>
            {exp.city ? (
              <p className="mt-0.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-ink-secondary)]">
                {t(exp.city, locale)}
              </p>
            ) : null}
            <p className="mt-5 font-sans text-[15px] font-light leading-[1.7] text-[var(--color-ink)]">
              {t(exp.body, locale)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );

  const skillsContent = (
    <div>
      <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-secondary)]">
        {t(about.skillsLabel, locale)}
      </h2>
      <div className="mt-10 space-y-10">
        {about.skills.map((group, i) => (
          <section key={i}>
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink-secondary)]">
              {t(group.label, locale)}
            </h3>
            <p className="mt-3 font-sans text-[15px] leading-[1.8] text-[var(--color-ink)]">
              {t(group.items, locale)}
            </p>
          </section>
        ))}
      </div>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      <div className="flex flex-1 items-center px-6 py-20 md:px-20 md:py-24">
        <div className="ml-auto max-w-[560px]">
          {/* Name + personal */}
          <h1 className="font-sans text-[36px] font-light leading-[1.1] tracking-[-0.015em] text-[var(--color-ink)] md:text-[48px]">
            {t(about.name, locale)}
          </h1>
          <p className="mt-3 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink-secondary)]">
            {t(about.personal, locale)}
          </p>

          {/* Intro */}
          <p className="mt-10 font-sans text-[16px] leading-[1.7] text-[var(--color-ink)] md:text-[17px] md:leading-[1.7]">
            {t(about.intro, locale)}
          </p>

          {/* Education */}
          <div className="mt-12">
            <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink-secondary)]">
              {t(about.educationLabel, locale)}
            </h2>
            <div className="mt-4 space-y-1 font-sans text-[14px] leading-[1.7] text-[var(--color-ink)] md:text-[15px]">
              {t(about.education, locale)
                .split("\n")
                .map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
            </div>
          </div>

          {/* Gold rule */}
          <div
            aria-hidden="true"
            className="my-12 h-px w-full md:my-16"
            style={{ background: "var(--gradient-gold)" }}
          />

          {/* Triggers */}
          <AboutTriggers
            experienceLabel={t(about.experienceLabel, locale)}
            skillsLabel={t(about.skillsLabel, locale)}
            closeLabel={t(about.closeLabel, locale)}
            experienceContent={experienceContent}
            skillsContent={skillsContent}
          />
        </div>
      </div>

    </main>
  );
}
