import { FunctionComponent } from 'react'
import { expertise } from '../types'
import { motion } from 'framer-motion'

const easing = [0.6, -0.5, 0.01, 0.99]
const fadeInUp = {
   initial: {
      y: 60,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 6,
         ease: easing,
      },
   },
}

const SkillCard: FunctionComponent<{ skill: expertise }> = ({
   skill: { Icon, title, about },
}) => {
   //XSS attack :( on our portfolio btw, as an alternate use npm i dompurify
   function createMarkup() {
      return {
         __html: about,
      }
   }
   return (
      <div className='flex items-center p-2 space-x-4 '>
         <Icon className='w-12 h-12 text-green' />
         <div className=''>
            <h6 className='font-medium'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default SkillCard
