/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '15px 15px 10px rgba(0, 0, 0, 0.25)',
      }
    },

    colors: {
      background: "#FECE87",
      heading: "#6C757B",
      text: "#923006",
      white: "#ffffff",
      button: "#CD8309",
      lightred: "#EC2432",
      darkred: "#6C1500",
      lightyellow: "#FFE5C0"
    },
  },
  plugins: [],
}

