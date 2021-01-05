module.exports = {
   purge: ['./src/**/*.tsx'],
   darkMode: false, // or 'media' or 'class'
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
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
