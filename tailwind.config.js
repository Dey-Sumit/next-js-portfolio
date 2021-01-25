module.exports = {
   purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
      fontFamily: {
         kaushan: ['Kaushan Script'],
      },
      extend: {
         //TODO add green
         colors: {
            green: {
               DEFAULT: '#00f260',
            },
            black: {
               DEFAULT: '#010101',
            },
            black2: {
               DEFAULT: '#16181D',
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
