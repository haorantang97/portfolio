import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        display:    ["32px", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        module:     ["20px", { lineHeight: "1.9" }],
        body:       ["16px", { lineHeight: "1.6" }],
        caption:    ["13px", { lineHeight: "1.5" }],
        micro:      ["11px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        "case-title": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};

export default config;
