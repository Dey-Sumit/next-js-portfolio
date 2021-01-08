import { project } from './../types'

const data_projects: project[] = [
   {
      id: 0,
      name: 'COVID 19 tracker',
      image_path: '/images/covid.jpg',
      deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
      github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
      category: ['react'],
   },

   {
      id: 1,
      name: 'Dev Talks',
      image_path: '/images/dev.jpg',
      deployed_url: 'https://dev-talks.herokuapp.com/',
      github_url: 'https://github.com/Dey-Sumit/Dev-talks',
      category: ['node', 'mongo', 'react'],
   },

   {
      id: 2,
      name: 'Realtime Chat App',
      image_path: '/images/chatapp.jpg',
      deployed_url: 'https://sumit-chat.netlify.app/',
      github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
      //TODO type on category
      category: ['node', 'socket', 'react'],
   },

   {
      id: 3,
      name: 'Tweeter Clone',
      image_path: '/images/tweetme.jpg',
      deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
      github_url: 'https://github.com/Dey-Sumit/tweetme',
      category: ['django', 'react'],
   },
   {
      id: 4,
      name: 'Dev Portfolio',
      image_path: '/images/portfolio.jpg',
      deployed_url: 'http://suprateem.herokuapp.com/',
      category: ['vanilla'],
      github_url: 'https://github.com/Dey-Sumit/tweetme',
   },

   //    {
   //       name: 'Bengali New Year',
   //       image_path: '',
   //       deployed_url: 'https://dey-sumit.github.io/NewYear/',
   //       category: ['vanilla'],
   //       github_url: 'https://github.com/Dey-Sumit/tweetme',
   //    },

   {
      id: 5,
      name: 'Color Classification using tf.js',
      image_path: '/images/color.jpg',
      deployed_url: '!#',
      github_url: 'https://github.com/Dey-Sumit/color-classification',
      category: ['express', 'ml'],
   },

   //    {
   //       name: 'Blinking bubbles',
   //       image_path: '',
   //       deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
   //       github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
   //       category: ['processing'],
   //    },
]

export default data_projects
