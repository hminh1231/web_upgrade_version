/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1a2a3a',
        'brand-gold': '#c5a059',
        'brand-cream': '#fdfbf7',
      },
    },
  },
  plugins: [],
}
