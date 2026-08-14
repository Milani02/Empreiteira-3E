/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        charcoal: "#161613",
        paper: "#F7F5EF",
        steel: "#8C8C86",
        safety: {
          DEFAULT: "#FFC800",
          dim: "#E6B400",
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', "sans-serif"],
        head: ["Archivo", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        stampIn: {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-14deg)" },
          "60%": { opacity: "1", transform: "scale(0.92) rotate(-8deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-8deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
      },
      animation: {
        stampIn: "stampIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        pulseRing: "pulseRing 1.8s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};
