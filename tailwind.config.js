const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  theme: {
    colors: {
      'secondary': '#56437C',
      'primary': '#3091BC',
      'accent': '#6193AE',
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.coolGray,
      'red': colors.red,
      'yellow': colors.amber,
      'green': colors.emerald,
      'blue': colors.blue,
      'indigo': colors.indigo,
      'purple': colors.violet,
      'pink': colors.pink,
      'light-blue': colors.lightBlue,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        84: '21rem',
        124: '31rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
