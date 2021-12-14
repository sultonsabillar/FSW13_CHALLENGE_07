module.exports = {
  mode: 'jit',
  purge: ['./views/**/*.ejs', './public/javascripts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'coklat-muda': '#9C835F',
        'coklat-tua': '#724C21',
        'kuning-tua': '#F9B23D',
        'hijau-muda': '#4C9654',
        'hijau-tua': '#035B0C',
        'abu-abu': '#C4C4C4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
