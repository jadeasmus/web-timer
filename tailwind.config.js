const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: colors.red,
      white: colors.white,
      black: colors.black,
      green: {
        glow: "#29FF75",
        spotify: "#24DC65"
      } 
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
