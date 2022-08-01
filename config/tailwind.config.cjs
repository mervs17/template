/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D8FF",
        secondary: "#21222A",
        "react-blue": "#61DAFB",
        tertiary: "#DEEBF8",
        "dark-color": "#33373E",
        "dark-color-2": "#282D35",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        fira: ["Fira Code", "san-serif"],
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        "3xl": "0 0 70px rgba(0, 0, 0, 1)",
      },
      animation: {
        "slide-width": "slideWidth 1s ease",
        "fade-in": "fadeIn 0.4s ease-in-out",
      },
      backgroundImage: {
        logo: "url('./images/react-logo.png')",
        "react-logo": "url('./images/reactjs-icon-2.png')",
      },
      keyframes: {
        slideWidth: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },
  //plugins: [require("flowbite/plugin")],
};
