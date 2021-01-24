import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'

import { Project, Service, Skill } from './types'

const services: Service[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using <b>Express </b> & other popular frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about:
         'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
   },
   {
      Icon: AiOutlineAntDesign,
      title: 'UI/UX designer',
      about:
         'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
   },
   {
      Icon: RiComputerLine,
      title: 'Whatever',
      about:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
   },
]

const languages: Skill[] = [
   {
      Icon: BsCircleFill,
      name: 'Python',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Java',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'HTML',
      level: '80',
   },
   {
      Icon: BsCircleFill,
      name: 'BsCircleFill',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'Django',
      level: '80',
   },
   {
      Icon: BsCircleFill,
      name: 'Bootstrap',
      level: '80',
   },
]

const tools: Skill[] = [
   {
      Icon: BsCircleFill,
      name: 'Figma',
      level: '85',
   },
   {
      Icon: BsCircleFill,
      name: 'Photoshop',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Illustrator',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'Framer',
      level: '45',
   },
]

const projects: Project[] = [
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

   {
      id: 5,
      name: 'Color Classification using tf.js',
      image_path: '/images/color.jpg',
      deployed_url: '!#',
      github_url: 'https://github.com/Dey-Sumit/color-classification',
      category: ['express', 'ml'],
   },
]

export { tools, languages, services, projects }
