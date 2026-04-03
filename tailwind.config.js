/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#991B1B",
        "primary-dark": "#7F1D1D",
        gold: "#D4A853",
        "gold-light": "#E8C87A",
        cream: "#FDF8F3",
        "cream-dark": "#F5EDE4",
        charcoal: "#1A1A1A",
        "charcoal-light": "#2D2D2D",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
