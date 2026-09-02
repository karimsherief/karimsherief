import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E1013",
        "bg-soft": "#14171B",
        surface: "#1B1F24",
        "surface-2": "#20252B",
        border: "#2A2F36",
        "border-soft": "#22262C",
        text: "#ECEDEF",
        "text-dim": "#9199A3",
        "text-faint": "#5C636C",
        accent: "#C9A876",
        "accent-2": "#6E8B80",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.45" } },
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse: "pulse 2.4s ease-in-out infinite",
        scroll: "scroll 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
