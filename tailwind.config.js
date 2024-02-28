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
        "primary":"#1e88e5",
        "secondary":"#2196f3",
        "third":"#64b5f6",
        "black":"#252525",
        "light":"#e9ecef"
      }
    },
  },
  plugins: [],
}

