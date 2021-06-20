module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fill: theme => ({
        'indigo-500': theme('colors.indigo.500'),
        'gray-600': theme('colors.gray.600'),
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
