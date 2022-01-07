module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#ff60ff',
          default: '#ff00cc',
          dark: '#c7009b',
        },
        blue: {
          light: '#685dcb',
          default: '#333399',
          dark: '#000d6a',
        },
      },
    },
  },
  plugins: [],
};
