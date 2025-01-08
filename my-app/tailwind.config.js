/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter' : ['Inter', 'sans-serif'],
        'Sourcesans' : ['Source Sans 3', 'sans-serif'],
      },
      fontSize:{
        'display': "64px",
        'small':"20px",
        'h4': "24px",
        'h2':"36px"
      },
      lineHeight:{
        'h2':"48px"
      },

      colors: {
        'primary' : "#0065F7",
        'secondary' : "#F2F2F2",
        'Dark' : "#020817",
      }
    },
  },
  plugins: [],
}

