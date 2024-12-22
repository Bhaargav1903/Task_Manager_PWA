// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3d52a0', // Deep Blue
        secondary: '#7091e6', // Light Blue
        tertiary: '#8697c4', // Light Grayish Blue
        quaternary: '#adbbda', // Soft Blue
        quinary: '#ede8f5', // Very Light Blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
