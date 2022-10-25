/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'whiteText':'rgba(255, 255 255, 0.46)',
        'blurWhite':'rgba(255, 255 255, 0.06)'
      }
    },
  },
  plugins: [],
}