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
        greyPurple: '#6D6D8A',
        activePurple: '#6767A9',
        darkPurple: '#322E67',
        ligthPurple: '#BFC0E0',
        greyPage: '#D9D9D9'
      },
      fontFamily: {
        monse: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xxs: "425px",
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