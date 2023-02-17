/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0b12b",
        title: "#222222",
        mid: "#555555",
        "sub-title": "#666666",
        orange: "#FA582C",
        greens: "#669900",
      },
    },
  },
  plugins: [],
};
