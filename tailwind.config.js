module.exports = {
  purge: [
    'source/**/*.js',
    'source/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled']
    },
  },
  plugins: [],
}
