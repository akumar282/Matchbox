/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  './node_modules/tw-elements-react/dist/js/**/*.js',
];
export const theme = {
  extend: {
    animation: {
      message1: 'typewriter 2s steps(21) forwards',
      carat: 'typewriter 2s steps(19) forwards, blink 1s steps(21) infinite 2s'
    },
    keyframes: {
      typewriter: {
        to: {
          left: '100%',
        },
      },
      blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
        },
      },
    },
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
    },
    screen: {
      '3xl': '1920px',
    },
  },
};
export const plugins = [
  require('flowbite/plugin'),
  require('tw-elements-react/dist/plugin.cjs'),
  require('tailwindcss-animated')
];