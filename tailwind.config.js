/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: ["bg-danger-dark", "bg-sky-600", "text-white", "bg-secondary-dark"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lmd: "992px",
      lg: "1026px",
      xl: "1321px",
    },
    container: {
      center: true,
      padding: "12px",
    },
    fontSize: {
      none: ["0"],
      sm: ["0.75rem"], // 14px
      base: ["1rem"], // 16px
      lg: ["1.125rem"], // 18px
      xl: ["1.25rem"], // 20px
      "2xl": ["1.5rem"], // 24px
      "3xl": ["2rem"], // 32px
      "4xl": ["3rem"], // 48px
    },
    extend: {
      colors: {
        primary: {
          light: "#E9F4EE",
          DEFAULT: "#88C6A5",
          dark: "#408560",
        },
        secondary: {
          light: "#F4EEE9",
          DEFAULT: "#E3A864",
          dark: "#D28226",
        },
        danger: {
          DEFAULT: "#F7D2DB",
          dark: "#A31C3D",
        },
        content: {
          light: "#a0a0a0",
          DEFAULT: "#606060",
          dark: "#202020",
        },
      },
      fontFamily: {
        sans: ["Noto Sans TC", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        huge: "2rem",
      },
      boxShadow: {
        "around-primary": "0 0 2px 2px #88C6A5",
        "around-secondary": "0 0 2px 2px #E3A864",
        "around-danger": "0 0 2px 2px #F7D2DB",
      },
      keyframes: {
        blink: {
          "50%": { borderColor: "transparent" },
        },
        "typing-effect": {
          "0%": { width: "0" },
          "50%": { width: "14em" },
        },
        "twinkle-effect": {
          "0%,40%": { right: "-100%" },
          "65%,100%": { right: "150%" },
        },
        "bigger": {
          '0%': { boxShadow: '0 0 0 #408560' },
          '12.5%': { boxShadow: '0 0 0 2px #408560' },
          '25%,100%': { boxShadow: '0 0 0 #408560' }
        },
        "scale": {
          '0%,100%': {
            transform: "scaleX(2.2)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          '50%': {
            transform: "scaleX(1)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
      },
      animation: {
        typing:
          "typing-effect 6s steps(14) infinite,blink 0.5s step-end infinite alternate",
        twinkle: "twinkle-effect 3s ease-out infinite",
        bigger: "bigger 1s linear infinite",
        scale: "scale 1s infinite"
      },
      zIndex: {
        1: "1",
        5: "5",
      },
      flexBasis: {
        "1/8": "12.5%"
      },
      padding: {
        '34': '8.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
