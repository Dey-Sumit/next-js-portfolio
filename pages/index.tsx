import SkillCard from '../components/SkillCard'
import { about_data } from '../data/about'

import { motion } from 'framer-motion'

import { pageAnimation, stagger, fadeInUp } from '../animations'
import Head from 'next/head'

const About = () => {
   return (
      <>
         <motion.div
            className='flex flex-col flex-grow px-6 pt-1'
            variants={pageAnimation}
            initial='hidden'
            animate='visible'
            exit='exit'>
            <Head>
               <title>Sumit Dey | Web Developer | About</title>
            </Head>

            <h6 className='my-3 text-base font-medium'>
               I am currently pursuing B.Tech Degree(Final Year) in Computer
               Science Engineering from Academy of Technology. I have 3+ years
               of experience in Web Development and I have a Youtube Channel
               where I teach Full Stack Web Development Projects
            </h6>
            <div
               className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-gray-800'
               style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
               <h4 className='my-3 text-xl font-semibold tracking-wide'>
                  What I am doing
               </h4>

               <motion.div
                  className='grid gap-6 my-3 md:grid-cols-2'
                  variants={stagger}
                  animate='animate'
                  initial='initial'>
                  {/* children's initial and animate property should be same as the parent during a stagger effect  */}
                  {about_data.map(skill => (
                     <motion.div
                        variants={fadeInUp}
                        className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-gray-900 lg:col-span-1 '
                        key={skill.title}>
                        <SkillCard skill={skill} />
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </motion.div>
      </>
   )
}

export default About
