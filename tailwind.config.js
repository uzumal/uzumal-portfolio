module.exports = {
  purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#eff0ec',
        secondary: '#667376',
        tertiary: '#4f5b5c',
        quaternary: '#000000',
        accent: '#3e8b83',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
