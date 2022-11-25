/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      quicksand: "quicksand",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
