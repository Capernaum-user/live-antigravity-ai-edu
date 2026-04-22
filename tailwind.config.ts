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
        primary: {
          50: "#fff0f8",
          100: "#ffe1f2",
          200: "#ffc2e6",
          300: "#ff94d2",
          400: "#ff54b4",
          500: "#f72585",
          600: "#e0006a",
          700: "#bf005a",
          800: "#9c004a",
          900: "#82003e",
          DEFAULT: "#f72585",
        },
        secondary: {
          50: "#f0fdff",
          100: "#e0faff",
          200: "#b9f5ff",
          300: "#7aeeff",
          400: "#33e4ff",
          500: "#00d4ff",
          600: "#00aed4",
          700: "#0089aa",
          800: "#006e8a",
          900: "#005a72",
          DEFAULT: "#00d4ff",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#ff6a00",
          DEFAULT: "#ff6a00",
        },
        dark: {
          DEFAULT: "#07050f",
          100: "#0d0a1a",
          200: "#130f26",
          300: "#1a1430",
          400: "#22193d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(135deg, #ff6a00, #f72585, #00d4ff)",
        "hero-bg": "url('/neon-cloud-bg.jpg')",
      },
      boxShadow: {
        "neon-pink": "0 0 20px rgba(247, 37, 133, 0.5), 0 0 60px rgba(247, 37, 133, 0.2)",
        "neon-cyan": "0 0 20px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.2)",
        "neon-orange": "0 0 20px rgba(255, 106, 0, 0.5), 0 0 60px rgba(255, 106, 0, 0.2)",
        "neon-sm-pink": "0 0 8px rgba(247, 37, 133, 0.6)",
        "neon-sm-cyan": "0 0 8px rgba(0, 212, 255, 0.6)",
      },
      animation: {
        "neon-pulse-pink": "neonPulsePink 3s ease-in-out infinite",
        "neon-pulse-cyan": "neonPulseCyan 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
      },
      keyframes: {
        neonPulsePink: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(247,37,133,0.4), 0 0 30px rgba(247,37,133,0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(247,37,133,0.8), 0 0 70px rgba(247,37,133,0.4)" },
        },
        neonPulseCyan: {
          "0%": { boxShadow: "0 0 10px rgba(0,212,255,0.4), 0 0 30px rgba(0,212,255,0.2)" },
          "100%": { boxShadow: "0 0 25px rgba(0,212,255,0.8), 0 0 70px rgba(0,212,255,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
