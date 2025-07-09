/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // App Router
    './pages/**/*.{js,ts,jsx,tsx}',     // Pages Router (optional)
    './components/**/*.{js,ts,jsx,tsx}',// All your components
  ],
  theme: {
    extend: {
      colors: {
        coffee: '#4B2E2B',   // Dark brown (e.g., navbar bg)
        mocha: '#6F4E37',    // Medium brown (e.g., hero bg)
        cream: '#F5F5DC',    // Light background
        latte: '#FFF1E6',    // Off-white, for lighter sections
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'], // Optional for headings or accents
      },
    },
  },
  plugins: [],
}
