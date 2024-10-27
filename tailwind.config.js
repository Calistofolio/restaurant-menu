/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {'color-primary': 'hsl(14, 86%, 42%)',
      'color-secondary': 'hsl(14, 65%, 9%)',
      'color-tertiary': 'hsl(12, 20%, 44%)',
      'background-color': 'hsl(13, 31%, 94%)'
    },
    extend: {},
  },
  plugins: [],
}

