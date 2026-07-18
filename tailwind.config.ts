import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0C",
        surface: "#131418",
        surface2: "#1B1C21",
        line: "#26272C",
        bone: "#F2EFE9",
        muted: "#8B8A85",
        gold: {
          DEFAULT: "#C9A227",
          soft: "#E4C863",
          dim: "#7A631B",
        },
        indigo: {
          DEFAULT: "#1B2140",
          soft: "#2C3566",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-mesh":
          "linear-gradient(to right, rgba(201,162,39,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        "rotate-slow": "rotateSlow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
