import { ModuleLink } from "@/components/ModuleLink";

const modules: Array<[label: string, href: string]> = [
  ["about",    "/about"],
  ["building", "/building"],
  ["notes",    "/notes"],
  ["wearing",  "/wearing"],
  ["making",   "/making"],
  ["contact",  "/contact"],
];

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[var(--color-bg)]">
      <img
        src="/cover.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 md:w-[100vh] md:h-[100vw] md:rotate-90"
      />

      <div className="relative z-10 h-full mx-auto max-w-[1440px] px-6 py-12 md:px-20 md:py-24 flex flex-col justify-between">
        <header>
          <h1 className="text-[24px] md:text-display font-medium text-[var(--color-ink)]">
            Haoran Tang
          </h1>
          <p className="mt-2 text-[12px] md:text-caption italic text-[var(--color-ink-secondary)]">
            Independent. Between AI products, fashion, and image.
          </p>
        </header>

        <nav>
          <ul className="space-y-0">
            {modules.map(([label, href]) => (
              <li key={label}>
                <ModuleLink href={href}>{label}</ModuleLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
