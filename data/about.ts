import { expertise } from './../types'
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'

const about_data: expertise[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using HTML, CSS and React.js',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using Express & other popular frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about: 'I can develop robust REST API using django-rest-api & Node API',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about: 'a daily problem solver in HackerRank and Leetcode,HackerRank',
   },
   {
      Icon: AiOutlineAntDesign,
      title: 'UI/UX designer',
      about: 'minimalistic user interface designer using figma and  framer',
   },
   {
      Icon: RiComputerLine,
      title: 'Whatever',
      about:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
   },
]

export { about_data }
