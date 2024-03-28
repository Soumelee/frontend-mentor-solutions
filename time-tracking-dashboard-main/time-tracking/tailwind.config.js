/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font": ["Rubik", "sans-serif"]
      },
      colors: {
        'Blue': 'hsl(246, 80%, 60%)',
        'Very-dark-blue': 'hsl(226, 43%, 10%)',
        'Dark-blue': 'hsl(235, 46%, 20%)',
        'Desaturated-blue': 'hsl(235, 45%, 61%)',
        'Desaturated-blue-2': 'hsl(235, 45%, 35%)',
        'Pale-Blue': 'hsl(236, 100%, 87%)',

        
      }
    },
  },
  plugins: [],
}

