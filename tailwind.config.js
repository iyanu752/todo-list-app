/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': {
        100: 'hsl(235, 21%, 11%)',
        200: 'hsl(235, 24%, 19%)',
        300: 'hsl(234, 39%, 85%)',
        400: 'hsl(236, 33%, 92%)',
        500: 'hsl(234, 11%, 52%)',
        600: '#hsl(233, 14%, 35%)',
        700: 'hsl(237, 14%, 26%)',
      },

      'light-blue': {
        100: 'hsl(0, 0%, 98%)',
        200: 'hsl(236, 33%, 92%)',
        300: 'hsl(234, 11%, 52%)',
        400: 'hsl(236, 9%, 61%)',
        500: 'hsl(235, 19%, 35%)',
      },
      'primaryb': ' hsl(220, 98%, 61%)',
      'primary-grad': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
    },
    fontWeight: {
      md: '400',
      xl: '700',
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class"
}

