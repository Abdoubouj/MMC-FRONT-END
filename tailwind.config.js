/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "white":"#fff",
        "primary":"#032b43",
        "secondary":"#053e61",
        "third":"#0b5f94",
        "black":"#252525",
        "light":"#e9ecef"
      }
    },
  },
  plugins: [],
}

