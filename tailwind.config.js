module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: 'rgb(249, 119, 54)',
        blue: 'rgb(33, 63, 112)',
        offBlue: 'rgba(36, 45, 82, 0.8)',
        offGray: 'rgba(36, 45, 82, 0.6)',
        pink: 'rgb(255, 249, 246)',
        darkGray: 'rgb(30, 30, 38)',
        offWhite: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};