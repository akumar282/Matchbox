/** @type {(tailwindConfig: object) => object} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
      './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'roboto-mono',
        secondary: 'roboto-bold',
      },
      colors: {
        'primary-purple': '#CDC7FD',
        'secondary-blue': '#4D3DD0',
        'grey': '#F2F0EB',
        'dark-purple': '#5E3FBE',
        'light-purple': '#E5DAFB',
        'light-green': '#6D60DC',
        'deep-pink': '#FF0099',
        ...colors
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements-react/dist/plugin.cjs'),
    require('tailwindcss-animated'),
    require("daisyui")
  ],
});

