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
        secondSection: "url('/src/assets/kid.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
