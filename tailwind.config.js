module.exports = {
   purge: ['./src/**/*.tsx'],
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
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
