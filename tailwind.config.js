/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        'blue': {
          300:'#95A7BF',
          400: '#576d8f',
          500:'#364861',
          700:'#273245',
          900:'#1A202B',
          950:'#171717'
        }
        // 'lightest': '#95A7BF',
        // 'lightBlue': '#364861',
        // 'midBlue': '#273245',
        // 'darkBlue': '#1A202B',
        // 'darkest': '#171717'
      }
    },
  },
  plugins: [],
}