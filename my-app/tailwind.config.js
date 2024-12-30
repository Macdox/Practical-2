/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'display': "64px",
        'small':"20px"
      },

      colors: {
        'primary' : "#0056D2",
        'secondary' : "#F2F2F2",
        'Dark' : "#020817",
      }
    },
  },
  plugins: [],
}

