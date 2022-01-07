module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pluple: {
          light: '#360033',
          dark: '#18000e',
        },
        cyan: {
          light: '#0b8793',
          dark: '#005a65',
        },
      },
    },
  },
  plugins: [],
};
