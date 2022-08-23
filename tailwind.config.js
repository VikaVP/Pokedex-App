/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'latoreguler': 'Latoreguler, sans-serif'
      },
      colors: {
        'grey-pastel': '#CACACA',
        'white-pastel': '#FCFAF1',
        'black-pastel': '#4E4E4E',
        'light-grey': '#F8F8F8',
        'light-grey-2': 'rgba(0,0,0,.3)'
      }
    },
  },
  plugins: [],
}
