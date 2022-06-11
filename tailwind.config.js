/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#101010",
        "secondary-dark": "#1a1a1a",
        "primary-light": "#fafafa",
        "text-light-1": "#fafafa",
        "text-light-2": "#a1a1a1",
        "accent-1": "#007bec",
        "accent-2": "#0A3C87",
        "accent-3": "#FA00FF"
      },
      backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    },
  },
  plugins: [],
}
