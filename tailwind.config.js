/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: {max: '991.99px'},
      sm: {max: '767,99px'},
      xs: {max: '479,99px'},
    },
    extend: {
      fontFamily: {
        ptsans: [ "PT Sans", "sans-serif"]
      },
      container: {
        center: true,
        padding: '12px',
      },
      colors: {
        main: "#131415",
        secondary: "#2D2E30",
        orange: "#CA563F",
        darkblue: "#243544",
        lightgray: '#9F9F9F',
      }
    },
  },
  plugins: [],
}

