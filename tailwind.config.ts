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
        "brand-blue": {
          DEFAULT: "#0D4C8F",
          light: "#1E6BB8",
          dark: "#0A3D73",
        },
        "brand-gold": {
          DEFAULT: "#F7B500",
          light: "#FFC83D",
          dark: "#CC9100",
        },
        "brand-green": {
          DEFAULT: "#8BC34A",
          light: "#AED581",
          dark: "#689F38",
        },
        charcoal: {
          DEFAULT: "#111111",
          light: "#1A1A1A",
          dark: "#000000",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "0" }],
        "heading-xl": ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.25" }],
        "heading-lg": ["clamp(1.5rem, 2.5vw, 1.875rem)", { lineHeight: "1.3" }],
        "heading-md": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.35" }],
        "heading-sm": ["clamp(1.125rem, 1.5vw, 1.25rem)", { lineHeight: "1.4" }],
        "body-lg": ["clamp(1.125rem, 1.5vw, 1.25rem)", { lineHeight: "1.6" }],
        "body-md": ["clamp(1rem, 1.25vw, 1.125rem)", { lineHeight: "1.6" }],
        "body-sm": ["clamp(0.875rem, 1vw, 1rem)", { lineHeight: "1.5" }],
        "caption": ["0.8125rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "3xs": "0.125rem",
        "2xs": "0.25rem",
        "xs": "0.5rem",
        "sm": "0.75rem",
        "md": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
        "6xl": "12rem",
      },
      borderRadius: {
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-2xl": "32px",
        "radius-3xl": "48px",
        "radius-full": "9999px",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.12)",
        "glass-lg": "0 16px 48px 0 rgba(0, 0, 0, 0.16)",
        "glass-xl": "0 24px 64px 0 rgba(0, 0, 0, 0.2)",
        "inner-glass": "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        "glow-blue": "0 0 40px rgba(13, 76, 143, 0.3)",
        "glow-gold": "0 0 40px rgba(247, 181, 0, 0.3)",
      },
      backdropBlur: {
        "glass": "12px",
        "glass-lg": "20px",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "500": "500ms",
        "700": "700ms",
        "1000": "1000ms",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-down": "fadeDown 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(13, 76, 143, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(13, 76, 143, 0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;