/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    container:{
      center:true,
      padding: '250px',
      

    },
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