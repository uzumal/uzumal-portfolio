module.exports = {
  purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f1f1f1',
        secondary: '#222835',
        tertiary: '#889B91',
        quaternary: '#777878',
        accent: '3e8b83',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
