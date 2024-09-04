/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightYellow: "#FFD700",
        skyBlue: "#87CEEB",
        coral: "#FF7F50",
      },
    },
  },
  plugins: [],
};
