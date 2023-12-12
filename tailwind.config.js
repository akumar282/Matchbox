/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  './node_modules/tw-elements-react/dist/js/**/*.js',
];
export const theme = {
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
    }
  },
};
export const plugins = [
  require('flowbite/plugin'),
  require('tw-elements-react/dist/plugin.cjs'),
  require('tailwindcss-animated')
];