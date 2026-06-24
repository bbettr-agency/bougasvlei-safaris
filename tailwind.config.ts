import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── Dark bushveld surfaces (deep charcoal scale) ──────────────────
          ink: "#161310", // deepest charcoal (page base)
          charcoal: "#1F1A15", // primary dark surface
          bark: "#2A231C", // raised dark surface / cards
          clay: "#352C23", // hover / borders on dark
          // ── Warm naturals ────────────────────────────────────────────────
          sand: "#C9A86A", // warm sand
          sandLight: "#DDC79A",
          bronze: "#8A6A3B", // bronze
          bronzeDark: "#6E5430",
          // ── Gold accent (subtle premium) ─────────────────────────────────
          gold: "#C9A24B",
          goldDark: "#A8842F",
          // ── Light / ivory surfaces ───────────────────────────────────────
          ivory: "#F5F0E6",
          bone: "#EDE6D6",
          stone: "#DDD3C0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201,162,75,0.20), transparent 70%)",
        "sand-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,106,0.16), transparent 70%)",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(22,19,16,0.55) 0%, rgba(22,19,16,0.35) 35%, rgba(22,19,16,0.85) 100%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(201,162,75,0.40)",
        gold: "0 18px 50px -20px rgba(201,162,75,0.55)",
        ink: "0 30px 80px -30px rgba(10,8,6,0.85)",
        card: "0 24px 60px -30px rgba(22,19,16,0.55)",
        cardLight: "0 24px 60px -30px rgba(60,45,30,0.22)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
