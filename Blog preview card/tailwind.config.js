/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",        
        black: "hsl(0, 0%, 7%)"
      },
      fontFamily:{
        font: ["Figtree", "sans-serif"]
      }
    },
  },
  plugins: [],
}

