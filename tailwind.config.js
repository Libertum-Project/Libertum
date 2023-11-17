const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-100": "#FFFFFF",
        "text-200": "#e0e0e0",
        "bg-100": "#0A1929",
        "bg-200": "#1a2839",
        "bg-300": "#323f52",
        "primary-200": "#4f6a96",
        "primary-300": "#afc9fa",
        "accent-100": "#ffed8f",
        "accent-200": "#e0c638",
        "info-100": "#a3bbce",
      },
      keyframes: {
        rslide: {
          "0%": { transform: "translate(128px)", opacity: 0 },
          "100%": { transform: "translate(0px)", opacity: 1 },
        },
      },
      animation: {
        "slide-right": "rslide 1.2s ease-out 1",
      },
      screens:{
        '2xl': '1800px'
      }
    },
    fontFamily: {
      sans: ["montserrat", ...defaultTheme.fontFamily.sans],
      body: ["Inter", ...defaultTheme.fontFamily.sans],
      logo: ["agencyfb", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
