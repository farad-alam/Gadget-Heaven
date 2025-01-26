/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
