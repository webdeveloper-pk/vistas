/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#FDFDFD",
        "lighter-white": "rgba(205, 205, 205, 0.23)",
        "light-gray": "rgba(70, 70, 70, 0.32)",
      },
    },
  },
  plugins: [],
};
