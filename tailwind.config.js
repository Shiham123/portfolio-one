const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      colorOne: '#edf9fe',
      colorTwo: '#001c55',
      colorThree: '#7f8daa',
    },
    fontFamily: {
      playfairDisplay: ['Playfair Display', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
});
