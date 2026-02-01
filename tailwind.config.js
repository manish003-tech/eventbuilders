/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000', // Neon red
        secondary: '#ffff00', // Yellow
        accent: '#00bfff', // Neon blue
        dark: '#000000', // Black
        charcoal: '#333333', // Charcoal
      },
      fontFamily: {
        bold: ['Arial Black', 'sans-serif'], // Bold carnival vibe
      },
    },
  },
  plugins: [],
};