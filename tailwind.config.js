/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // neumorphic: "0px 35px 90px 14px rgba(0,0,0,0.1)",
        neumorphic: "0px 0px 50px 0px rgba(0,0,0,0.1)", // original
        // neumorphic: "0px 0px 50px 0px rgba(241,211,173,0.5)", // stone color
        // neumorphic: "0px 0px 30px 12px rgba(250,235,235,0.7)", // reddish
        // neumorphic: "0px 0px 50px 0px rgba(246, 231, 210, 0.6)", // warm white
        // neumorphic: "0px 10px 50px 30px #f2f3f4",
        // neumorphic: "0px 10px 67px 21px ;",
      },
      colors: {
        "warm-gray-400": "rgb(176,176,176)",
      },
    },
  },
  plugins: [],
};
