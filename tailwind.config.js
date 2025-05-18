/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ftGray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          300: '#d1d5db',
          500: '#6b7280',
          700: '#374151',
          900: '#111827',
        },
        ftOrange: '#ec7c00', // signature orange highlight
      },
      fontFamily: {
        serif: ['"Merriweather"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.563rem', { lineHeight: '2rem' }],
      },
    },
  },
  plugins: [],
}
