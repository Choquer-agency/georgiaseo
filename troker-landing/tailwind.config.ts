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
        brand: "#ff9500",
        dark: "#0c0c0c",
        "bg-dark": "#1a1a1a",
        light: "#ffffff",
        grey: "#f8f8f8",
        "grey-1": "#b7b7b7",
        "dark-faded": "rgba(53, 50, 51, 0.1)",
        "light-faded": "rgba(255, 255, 255, 0.1)",
        // Background accent palette
        "bg-orange": "#ffca94",
        "bg-light-green": "#c4ef7a",
        "bg-green": "#61d39e",
        "bg-blue": "#bcefff",
        "bg-yellow": "#ffec7e",
        "bg-red": "#ff6d6d",
        "bg-teal": "#77dcd8",
        "bg-brown": "#d9d586",
      },
      fontFamily: {
        sans: ["var(--font-neue-montreal)", "Arial", "sans-serif"],
        display: ["var(--font-neue-bit)", "Arial", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      fontSize: {
        // Fluid type scale matching the Webflow export
        "fluid-display": "clamp(4rem, 4vw + 2.5rem, 7rem)",
        "fluid-h1": "clamp(3.45rem, 4vw + 1.75rem, 6.9rem)",
        "fluid-h2": "clamp(2rem, 2.5vw + 1rem, 4rem)",
        "fluid-h3": "clamp(1.5rem, 1.5vw + 0.75rem, 3rem)",
        "fluid-h4": "clamp(1.25rem, 1vw + 0.75rem, 2rem)",
        "fluid-h5": "clamp(1.3125rem, 0.5vw + 1rem, 1.6875rem)",
        "fluid-h6": "clamp(1.1875rem, 0.4vw + 0.9rem, 1.5rem)",
        "fluid-large": "clamp(1.375rem, 0.5vw + 1.125rem, 1.625rem)",
        "fluid-main": "clamp(1.0625rem, 0.2vw + 0.9rem, 1.1875rem)",
        "fluid-medium": "clamp(1.25rem, 0.2vw + 1.1rem, 1.375rem)",
        "fluid-small": "clamp(0.625rem, 0.5vw + 0.375rem, 0.9375rem)",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        DEFAULT: "0.5rem",
        lg: "1rem",
        full: "100vw",
      },
      maxWidth: {
        container: "85rem",
        "container-sm": "75rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
