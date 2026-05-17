import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        steel: {
          950: "#080b0f",
          900: "#0c1117",
          850: "#101820",
          800: "#16202a",
          700: "#263544",
          500: "#597083",
          300: "#a5b5c2"
        },
        signal: {
          500: "#38bdf8",
          400: "#67e8f9"
        },
        ember: {
          500: "#f97316",
          400: "#fb923c"
        }
      },
      boxShadow: {
        "industrial": "0 24px 80px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
