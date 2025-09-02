/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enables dark mode with the "dark" class on <html> or <body>
  theme: {
    extend: {
      colors: {
        // Base colors
        primary: {
          DEFAULT: "#ed1c24", // Light mode default
          dark: "#b31217", // Dark mode variant
        },
        secondary: {
          DEFAULT: "#929497", // Light mode default
          dark: "#6c6e70", // Dark mode variant
        },
        background: {
          DEFAULT: "#1a1a1a",
        },
        text: {
          DEFAULT: "#f5f5f5",
        },
      },
      boxShadow: {
        bottom: "0px 17px 74px 30px rgba(0,0,0,0.95);",
      },
    },
  },
  plugins: [],
};
