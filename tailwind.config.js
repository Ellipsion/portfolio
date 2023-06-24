/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // neumorphic: "0px 35px 90px 14px rgba(0,0,0,0.1)",
        neumorphic: "0px 0px 50px 0px rgba(0,0,0,0.1)", // original
      },
      colors: {
        "warm-gray-400": "rgb(176,176,176)",
      },
    },
  },
  plugins: [],
};
