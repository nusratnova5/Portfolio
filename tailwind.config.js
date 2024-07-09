/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: "#161616",
        accent:{
          DEFAULT: "#3dcfb6",
          hover: "#00e187",
        }, 
        customBackground: "#202020",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

