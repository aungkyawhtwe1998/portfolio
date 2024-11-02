/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        primary: '#133E87',
        secondary: '#608BC1',
        accent: '#CBDCEB',
        light: '#F3F3E0',
        lightBackground: '#ebe9e8',
        dark: '#393838',
        grey: '#737373',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}
