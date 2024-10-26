/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7AB0A',
        secondary: '#242424',
        accent: '#333333',
        blue: '#0070f3',
        light: '#eaeaea',
        lightBackground: '#fafafa',
        dark: '#111',
        grey: '#999999',
        greyBackground:"#292929"
        // Add more colors as needed
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}
