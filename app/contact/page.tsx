export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      <div className="fixed bottom-12 right-12">
        <a
          href="mailto:haorantang3033@gmail.com"
          className="group relative inline-block font-sans text-[14px] font-thin tracking-[0.08em] text-[var(--color-ink)]"
        >
          haorantang3033@gmail.com
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-1 h-px w-0 transition-[width] duration-300 ease-out group-hover:w-full"
            style={{ background: "var(--gradient-gold)" }}
          />
        </a>
      </div>
    </main>
  );
}
