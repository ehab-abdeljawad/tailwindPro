/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors :{
        fristcolor:'red'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px #333',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px #333',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}