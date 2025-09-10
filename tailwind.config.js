/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6b35",
        secondary: "#ffb84d",
        accent: "#ff8c42",
        "light-bg": "#fff8f3",
        "dark-bg": "#000000",
      },
    },
  },
  plugins: [],
};
