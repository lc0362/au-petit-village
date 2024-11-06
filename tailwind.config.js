/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        'blackapv': '#151217',
        'orangeapv': '#F9D0A3',
        'yellowapv': '#FDD90B',
        'redapv': '#DA001E',
      },
      screens:{
        'widescreen':{ 'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen':{ 'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes:{
        'open-menu': {
          '0%' : {transform: 'scaleY(0)'},
          '80%' : {transform: 'scaleY(1.2)'},
          '100%' : {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

