const links: Array<[label: string, href: string]> = [
  ["About",    "/about"],
  ["Building", "/building"],
  ["Design",   "/design"],
  ["Studio",   "/studio"],
  ["Contact",  "/contact"],
];

export default function Home() {
  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-black font-sans"
    >
      <img
        src="/cover-prototype.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: "scaleX(-1)",
          objectPosition: "right bottom",
        }}
      />

      <div
        className="absolute select-none font-sans"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: 100,
          fontSize: "40px",
          lineHeight: "40px",
          letterSpacing: "0.12em",
          color: "var(--color-bg)",
          textAlign: "center",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          paddingLeft: "0.12em",
        }}
      >
        HAORAN TANG
      </div>

      <nav
        className="absolute flex items-baseline font-sans"
        style={{
          right: "48px",
          bottom: "48px",
          gap: "12px",
          whiteSpace: "nowrap",
          fontWeight: 200,
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0.08em",
          color: "var(--color-ink)",
        }}
      >
        {links.map(([label, href], i) => (
          <span key={label} className="flex items-baseline" style={{ gap: "12px" }}>
            {i > 0 && <span aria-hidden="true">—</span>}
            <a
              href={href}
              style={{ color: "var(--color-ink)", textDecoration: "none" }}
            >
              {label}
            </a>
          </span>
        ))}
      </nav>
    </main>
  );
}
