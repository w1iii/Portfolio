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
        bg: '#0F1316',
        card: '#161B20',
        border: '#1E252C',
        accent1: '#FAC4C4',
        accent2: '#FA9A9A',
        accent3: '#FF6E6E',
        accent4: '#FD3E3E',
        para: '#BEBEBE',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
