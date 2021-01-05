import { project } from './../types'
// import tweetme from '../public/assets/projects_images/tweetme.PNG'
// import chatapp from '../public/assets/projects_images/chatapp.JPG'
// import hardware_store from '../public/assets/projects_images/hardware_store.jpg'
// import portfolio from '../public/assets/projects_images/portfolio.JPG'
// import new_year from '../public/assets/projects_images/new_year.jpg'
// import color_classification from '../public/assets/projects_images/color_classification.jpg'
// import blinking from '../public/assets/projects_images/blinking.JPG'
// import COVID from '../../assets/projects_images/COVID.jpg'
// import Dev_talks from '../public/assets/projects_images/Dev_talks.jpg'

// import Dev from '/blinking.JPG'

const data_projects: project[] = [
   {
      name: 'COVID 19 tracker',
      image:
         'https://sumitdey.netlify.app/static/media/algo_visual.36c68cf4.png',
      deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
      github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
      category: ['react.js'],
   },

   {
      name: 'Dev Talks',
      image:
         'https://sumitdey.netlify.app/static/media/algo_visual.36c68cf4.png',
      deployed_url: 'https://dev-talks.herokuapp.com/',
      github_url: 'https://github.com/Dey-Sumit/Dev-talks',
      category: ['node.js', 'mongoDB', 'react.js'],
   },

   {
      name: 'Realtime Chat App',
      image:
         'https://sumitdey.netlify.app/static/media/algo_visual.36c68cf4.png',
      deployed_url: 'https://sumit-chat.netlify.app/',
      github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
      category: ['node', 'socket.io', 'react'],
   },

   {
      name: 'Tweeter Clone',
      image:
         'https://sumitdey.netlify.app/static/media/algo_visual.36c68cf4.png',
      deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
      github_url: 'https://github.com/Dey-Sumit/tweetme',
      category: ['django', 'react'],
   },
   {
      name: 'Dev Portfolio',
      image:
         'https://sumitdey.netlify.app/static/media/algo_visual.36c68cf4.png',
      deployed_url: 'http://suprateem.herokuapp.com/',
      category: ['vanilla'],
      github_url: 'https://github.com/Dey-Sumit/tweetme',
   },

   //    {
   //       name: 'Bengali New Year',
   //       image: '',
   //       deployed_url: 'https://dey-sumit.github.io/NewYear/',
   //       category: ['vanilla'],
   //       github_url: 'https://github.com/Dey-Sumit/tweetme',
   //    },

   //    {
   //       name: 'Color Classification using tf.js',
   //       image: '',
   //       deployed_url: '!#',
   //       github_url: 'https://github.com/Dey-Sumit/color-classification',
   //       category: ['node', 'machine_learning'],
   //    },

   //    {
   //       name: 'Blinking bubbles',
   //       image: '',
   //       deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
   //       github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
   //       category: ['processing'],
   //    },
]

export default data_projects
