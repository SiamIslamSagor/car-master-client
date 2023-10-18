/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontSquare: "'Aldrich', sans-serif",
        fontNoto: "'Noto Sans', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
