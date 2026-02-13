import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        violet: {
          50: "#f5f0ff",
          100: "#ede5ff",
          200: "#ddd0ff",
          300: "#c4abff",
          400: "#a67bff",
          500: "#8b4fff",
          600: "#7c2df7",
          700: "#6d1ee3",
          800: "#5b18bf",
          900: "#4c159c",
          950: "#2e0a6a",
        },
        rose: {
          50: "#fff1f3",
          100: "#ffe0e5",
          200: "#ffc6d0",
          300: "#ff9daf",
          400: "#ff6383",
          500: "#ff2d5e",
          600: "#ed1150",
          700: "#c80843",
          800: "#a80a3f",
          900: "#8f0d3c",
          950: "#50011c",
        },
        maroon: {
          DEFAULT: "#5E1534",
          light: "#7A1E45",
          dark: "#3D0D22",
        },
        cream: "#FFF8F5",
        gold: "#D4A853",
      },
      fontFamily: {
        cursive: ["var(--font-great-vibes)", "cursive"],
        dancing: ["var(--font-dancing)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
