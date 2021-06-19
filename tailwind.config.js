module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fill: theme => ({
        'indigo': theme('colors.indigo.500'),
      })
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      cursor: ['hover'],
    },
  },
  plugins: [],
}
