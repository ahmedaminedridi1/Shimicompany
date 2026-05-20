import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#f5a623",
          bright: "#ffb830",
          dim: "#c47d0e",
        },
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradientShift 4s ease infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;