import SkillCard from '../components/SkillCard'
import { about_data } from '../data/about'

import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'

const stagger = {
   animate: {
      transition: {
         staggerChildren: 1,
      },
   },
}

const variants = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 0.1,
         duration: 0.1,
      },
   },
   exit: {
      opacity: 0,
      transition: {
         delay: 0.1,
         ease: 'easeInOut',
      },
   },
}

const fadeInUp = {
   initial: {
      y: 60,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {},
   },
}
const container = {
   initial: {},
   animate: {
      transition: {
         staggerChildren: 0.2,
      },
   },
}
const About = () => {
   return (
      <motion.div
         className='flex flex-col flex-grow px-6 pt-1'
         variants={pageAnimation}
         initial='hidden'
         animate='visible'
         exit='exit'>
         <motion.h6 className='my-3 text-base font-medium'>
            I describe myself as someone who's persistent, a quick learner and
            loves problem solving by using simple and scalable solutions.
         </motion.h6>
         <div
            className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-gray-800'
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
            <h4 className='my-3 text-xl font-semibold tracking-wide'>
               What I am doing
            </h4>

            <motion.div
               className='grid gap-6 my-3 md:grid-cols-2'
               variants={container}
               animate='animate'
               initial='initial'>
               {about_data.map(skill => (
                  <motion.div
                     variants={fadeInUp}
                     className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-gray-900 lg:col-span-1 '>
                     <SkillCard skill={skill} key={skill.title} />
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </motion.div>
   )
}

export default About
