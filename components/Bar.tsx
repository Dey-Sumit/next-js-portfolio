import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

import { Skill } from '../types'

const Bar: FunctionComponent<{ value: Skill }> = ({
   value: { Icon, level, name },
}) => {
   const bar_width = `${level}%`
   return (
      <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-black-500'>
         <motion.div
            className='flex items-center px-4 py-1 rounded-full'
            style={{
               width: bar_width,
               backgroundImage: 'linear-gradient(90deg,#00f260,#0575e6)',
            }}
            variants={{
               initial: {
                  width: 0,
               },
               animate: {
                  width: bar_width,
                  transition: {
                     duration: 0.4,
                     type: 'spring',
                     damping: 10,
                     stiffness: 100,
                  },
               },
            }}
            animate='animate'
            initial='initial'>
            <Icon className='mr-3' /> {name}
         </motion.div>
      </div>
   )
}
export default Bar
