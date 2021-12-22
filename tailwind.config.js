module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '17px',
      xs: '16px',
      xxs: '15px',
      tiny: '14px',
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
    extend: {
      colors: {
        red: 'rgba(235, 87, 87, 1)',
        orange: 'rgb(249, 119, 54)',
        blue: 'rgb(33, 63, 112)',
        offBlue: 'rgba(36, 45, 82, 0.85)',
        offGray: 'rgba(36, 45, 82, 0.6)',
        pink: 'rgb(255, 249, 246)',
        darkGray: 'rgba(30, 30, 38, 0.9)',
        offWhite: 'rgba(255, 255, 255, 0.1)',
        veryOffWhite: 'rgba(255, 255, 255, 0.5)',
        darkOverlay: 'rgba(37, 43, 70, 0.95)',
        linearOrange: 'rgba(255, 151, 99, 0.25)',
        linearWhite: 'rgba(196, 196, 196, 0)',
        lightOrange: 'rgb(254, 231, 219)',
        borderGray: 'rgba(209, 204, 197, 1)',
      },
      boxShadow: {
        main: '0px 15px 40px rgba(249, 119, 54, 0.3)',
        service: '0px 10px 40px 0px rgba(253, 243, 232, 1)',
        specialService: '0px 10px 40px 0px rgba(249, 119, 54, 0.7)',
        testimonial: '0px 10px 40px 0px rgba(0, 0, 0, 0.06)',
      },
      gridTemplateColumns: {
        advantages: 'repeat(2, minmax(0, 268px))',
        testimonials: 'repeat(3, 440px)',
        footer: 'repeat(4, 25px)',
      },
      gridTemplateRows: {
        services: '470px',
        testimonials: '320px',
      },
    },
  },
  plugins: [],
};
