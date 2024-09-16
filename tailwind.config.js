module.exports = {
  content: ['./src/**/*.{html,js}'],
  corePlugins: {
    fill: false,
  },
  purge: [],
  darkMode: false, // 或 'media' 或 'class'
  theme: {
    extend: {
      colors: {
        'first-section': '#2c3e50',
      },
      backgroundImage: {
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
        120: '30rem',
        132: '33rem',
        144: '36rem',
        168: '42rem',
        192: '48rem',
      },
      fontSize: {
        '10xl': '10.5rem',
        '11xl': '13rem',
        '12xl': '15rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
