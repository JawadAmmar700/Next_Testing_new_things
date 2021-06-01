module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        trans: {
          '0%': {
            width: '1rem'

          },
          '10%': {
            transition: '9s ease',
            width: '3rem'
          },
        }
      },
      animation: {
        trans: 'trans 1s ease-in-out 1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
