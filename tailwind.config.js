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
        spotify: {
          green: {
            DEFAULT: '#1DB954',
            dark: '#1ED760',
          },
          black: '#191414',
          white: '#FFFFFF',
          'light-gray': '#B3B3B3',
          gray: '#282828',
        },
      },
    },
  },
  plugins: [],
};
