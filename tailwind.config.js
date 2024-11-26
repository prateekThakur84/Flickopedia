/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tyellow: '#ffc300',
        syellow: '#fcfb00',
        tblack: '#010101',
        tblue: '#034efd',

      },
    },
  },
  darkMode: 'class', // Enabling dark mode via class
  plugins: [],
}
