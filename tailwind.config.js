/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      white: '#ffffff',
      primary: {
        '50': '#f5fce9',
        '100': '#e8f8cf',
        '200': '#d1f1a5',
        '300': '#b4e571',
        '400': '#9cd84f',
        '500': '#78bb27',
        '600': '#5c951b',
        '700': '#477219',
        '800': '#3a5b19',
        '900': '#334d1a',
        '950': '#182a09',
      },
      secondary: {
        '50': '#fdfce9',
        '100': '#fdf8c4',
        '200': '#fbef8d',
        '300': '#f9de4b',
        '400': '#f5cc24',
        '500': '#e5b10d',
        '600': '#c58909',
        '700': '#9d620b',
        '800': '#824e11',
        '900': '#6f3f14',
        '950': '#412007',
      },
      tertiary: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#373737',
        '950': '#262626',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
