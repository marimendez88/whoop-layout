const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: {
        100: '#7094AB',
        200: '#4B6271',
        300: '#27343A',
        400: '#1A2327'
      },
      blue: {
        100: '#55D3FE',
        200: '#3C94E7',
        300: '#337DCD',
        400: '#255DA4',
        600: '#132E60'
      },
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
