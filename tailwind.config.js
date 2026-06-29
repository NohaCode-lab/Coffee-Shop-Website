/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Original coffee colors from your CSS
        coffee: {
          50: '#fff8f0',    // lightest background
          100: '#ffe3c2',   // menu section background
          200: '#d7ccc8',   // hero gradient right
          300: '#a1887f',   // hero gradient left
          400: '#8d6e63',
          500: '#6d4c41',
          600: '#5d4037',   // submenu links, etc.
          700: '#4e342e',   // header background
          800: '#3c1f0f',   // events header color
          900: '#2e1e0f',
        },
        gold: '#d4a762',    // accent color (buttons, hover)
        // Additional utility colors if needed
        'brown-dark': '#4b2e1f',
        'brown-light': '#b36a2f',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      // Add the clip-path utilities as custom utilities
    },
  },
  plugins: [],
};