/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2E2E3E",
        secondary: "#E0E1EB",
        paragraph: "#E0E0E6",
        purple: "#B985FB",
        card: "#343549",
        texto: "#787AA5",
      },
      fontFamily: {
        monse: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};