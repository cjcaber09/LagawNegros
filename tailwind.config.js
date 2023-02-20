/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: '#FFFFFC',
      background1: '#131322',
      background2: '##FBFCFF',
      text: '#FFFFFC',
      hoveredText:'#6CCFF6',
      searchbox: '#252538'
    },
    fontFamily:'Nunito'
  },
  plugins: [],
}
