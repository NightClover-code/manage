module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '17px',
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: 'rgb(249, 119, 54)',
        blue: 'rgb(33, 63, 112)',
        offBlue: 'rgba(36, 45, 82, 0.85)',
        offGray: 'rgba(36, 45, 82, 0.6)',
        pink: 'rgb(255, 249, 246)',
        darkGray: 'rgb(30, 30, 38)',
        offWhite: 'rgba(255, 255, 255, 0.6)',
        darkOverlay: 'rgba(37, 43, 70, 0.95)',
        linearOrange: 'rgba(255, 151, 99, 0.25)',
        linearWhite: 'rgba(196, 196, 196, 0)',
        lightOrange: 'rgb(254, 231, 219)',
      },
      boxShadow: {
        main: '0px 15px 40px rgba(249, 119, 54, 0.3)',
      },
      gridTemplateColumns: {
        advantages: 'repeat(2, minmax(0, 268px))',
      },
    },
  },
  plugins: [],
};
