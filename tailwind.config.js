/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-900": "#141414",
        "blue-100": "#7DD3FC",
        "blue-200": "#1B284E",
        "blue-300": "#2D3344",
        "blue-400": "#1b2335",
        "blue-500": "#0F172A",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,     
      }
    },
  },
  plugins: [],
};
