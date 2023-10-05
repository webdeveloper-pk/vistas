/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#FDFDFD",
        "lighter-white": "#F8F8F8",
        "light-gray": "rgba(70, 70, 70, 0.32)",
      },
    },
  },
  plugins: [],
};
