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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        // shadcn/ui colors with Catapult overrides
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#006E51",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#E72D2B",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#EF7A1E",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
        // Catapult Blue aliases
        catapultBlue1: "#0C5980",
        catapultBlue2: "#0B8CBD",
        catapultBlue3: "#4ABEDD",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;

