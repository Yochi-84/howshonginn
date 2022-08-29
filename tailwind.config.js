/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
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
          DEFAULT: "#1d976c",
          dark: "#156c4d",
        },
        danger: {
          DEFAULT: "#971d48",
          dark: "#6c1534",
        },
        link: {
          DEFAULT: "#606060",
        },
      },
      fontFamily: {
        sans: ["Noto Sans TC", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        huge: "1.5rem",
      },
      boxShadow: {
        around: "0 0 2px 2px #1D976C",
      },
      keyframes: {
        blink: {
          "50%": { borderColor: "transparent" },
        },
        "typing-effect": {
          "0%": { width: "0" },
          "50%": { width: "14em" },
        },
      },
      animation: {
        typing:
          "typing-effect 6s steps(14) infinite,blink 0.5s step-end infinite alternate",
      },
    },
  },
  plugins: [],
};
