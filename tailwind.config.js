/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  extend: {
    fontFamily: {
      primary: 'roboto-mono',
    },
    colors: {
      'purple': '#CDC7FD',
      'blue': '#4D3DD0',
      'grey': '#F2F0EB',
      'dark-purple': '#5E3FBE',
      'light-purple': '#E5DAFB',
      'light-green': '#6D60DC',
      'green': '#4D5CFF',
      'deep-pink': '#FF0099',
    }
  },
};
export const plugins = [require('flowbite/plugin')];

