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
    screens: {
      huge: { min: '1700px' },
      xxl: { max: '1300px' },
      xl: { max: '980px' },
      lg: { max: '840px' },
      sm: { max: '750px' },
      xs: { max: '500px' },
      mockup: { max: '1200px' },
      mockup2: { max: '950px' },
      mockup3: { max: '800px' },
      mockup4: { max: '700px' },
      mockup5: { max: '600px' },
      mockup6: { max: '500px' },
      1100: { max: '1100px' },
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
        offWhite: 'rgba(255, 255, 255, 0.9)',
        veryOffWhite: 'rgba(255, 255, 255, 0.5)',
        veryOffGray: 'rgba(196, 196, 196, 0,1)',
        darkOverlay: 'rgba(37, 43, 70, 0.95)',
        linearOrange: 'rgba(255, 151, 99, 0.2)',
        linearWhite: 'rgba(196, 196, 196, 0)',
        lightOrange: 'rgba(253, 243, 232, 1)',
        borderGray: 'rgba(209, 204, 197, 1)',
        solidGray: 'rgba(209, 204, 197, 0.4)',
      },
      boxShadow: {
        main: '0px 15px 40px rgba(249, 119, 54, 0.25)',
        service: '0px 10px 40px 0px rgba(253, 243, 232, 1)',
        specialService: '0px 10px 40px 0px rgba(249, 119, 54, 0.7)',
        testimonial: '0px 10px 40px 0px rgba(0, 0, 0, 0.05)',
        arrow: '0px 10px 40px 0px rgba(0, 0, 0, 0.08)',
      },
      gridTemplateColumns: {
        advantages: 'repeat(2, minmax(0, 268px))',
        footer: 'repeat(4, 25px)',
        advantagesRes: '340px',
        advantagesRes2: '300px',
        testimonials: 'repeat(4, 470px)',
        testimonialsRes: 'repeat(4, 100%)',
      },
      gridTemplateRows: {
        services: '470px',
        testimonials: '320px',
        auto: 'auto',
      },
      transitionDuration: {
        250: '250ms',
      },
      borderWidth: {
        1: '1px',
      },
      animation: {
        bounce: 'bounce 3s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          // '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
