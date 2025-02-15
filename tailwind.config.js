module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'xl': '40px',
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        extrabold: '800',
        bold: '700',
        normal: '400',
      },
    },
  },
  plugins: [],
}