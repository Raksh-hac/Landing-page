/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swarajDefaultColor:"#405189",
        swaraj: "#405189",
        primary:"#595557",
        secondary:"#C2C3CB",
        secondary1:"#49537D",
        defaulttext:"#464646",
      }
    },
  },
  plugins: [],
}
