/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        periwinkle: '#6474D7',
        blue: '#4361EE',
        lightBlue: '#C7D0F8',
        darkBlue: '#1939DC',
        purple: '#6C4DF6',
        lightPurple: '#E1BEE7',
        darkPurple: '#4A148C',
        orange: '#FF8A65',
        lightOrange: '#FFCCBC',
        darkOrange: '#BF360C',
        neonGreen: '#39FF14',
        green: '#2ECC71',
        lightGreen: '#D5F5E3',
        darkGreen: '#145A32',
        white: '#FFFFFF',
        lightGray: '#F5F5F5',
        gray: '#9E9E9E',
        darkGray: '#212121',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
