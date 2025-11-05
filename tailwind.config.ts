import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Catapult Brand Colors
        catapult: {
          green: "#006E51",
          DEFAULT: "#006E51",
          charcoal: "#2E2D2B",
          darkBlue: "#122836",
          blue1: "#0C5980",
          blue2: "#0B8CBD",
          blue3: "#4ABEDD",
          green2: "#5FBCA2",
          bronze: "#BD9F2C",
          yellow: "#FFB833",
          burgundy: "#931B61",
          pink: "#F8A0C7",
        },
        primary: {
          DEFAULT: "#006E51",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#E72D2B",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#EF7A1E",
          foreground: "#ffffff",
        },
        // Green Tints (90% to 10%)
        greenTints: {
          90: "#197062",
          80: "#339674",
          70: "#4C9985",
          60: "#66A897",
          50: "#80B6A8",
          40: "#99C5B9",
          30: "#B2D3CB",
          20: "#CCE2DC",
          10: "#E5F0EE",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

