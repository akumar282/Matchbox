/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
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
    }
  },
};
export const plugins = [];

