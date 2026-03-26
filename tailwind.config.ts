import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk:  ["var(--font-grotesk)"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter:    ["var(--font-inter)"],
        mono:     ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          primary:   "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          elevated:  "var(--bg-elevated)",
        },
        text: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        accent:       "var(--accent)",
        "accent-inv": "var(--accent-inv)",
        highlight:    "#C5975C",
        border:       "var(--border-color)",
      },
    },
  },
  plugins: [],
};

export default config;
