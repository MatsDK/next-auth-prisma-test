/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // "primary-dark": "#101010",
        'primary-dark': '#040404',
        'secondary-dark': '#1a1a1a',
        'primary-light': '#fafafa',
        'secondary-light': '#d9d9d9',
        'text-light-1': '#fafafa',
        'text-light-2': '#a1a1a1',
        'text-dark-1': '#010101',
        'text-dark-2': '#4f4f4f',
        'accent-1': '#007bec',
        'accent-2': '#0A3C87',
        'accent-3': '#FA00FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
  },
  plugins: [],
}
