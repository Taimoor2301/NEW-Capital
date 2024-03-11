/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBlack: "#1A202C",
        themeBlack2: "#22262A",
        themeGray: "#5E6437",
        themeGreenL1: "#8CD85D33",
        themeDarkGreen: "#033329",
        themeYellow: "#FFC42D",
        themeGreenl2: "#8CD85D4D",
      },
    },
  },
  plugins: [],
};
