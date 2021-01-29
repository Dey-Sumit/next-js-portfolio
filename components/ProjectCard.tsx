import { FunctionComponent, useState } from 'react'
import { Project } from '../types'
import Image from 'next/image'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
// TODO Github
import { AnimatePresence, motion } from 'framer-motion'
import { MdClose } from 'react-icons/md'
import { stagger, fadeInUp } from '../animations'
const animation = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         duration: 0.3,
      },
   },
}

const ProjectCard: FunctionComponent<{ project: Project }> = ({
   project: {
      name,
      image_path,
      deployed_url,
      github_url,
      description,
      key_points,
   },
}) => {
   const [showDetail, setShowDetail] = useState(false)
   // TODO scroll to top
   return (
      <motion.div>
         <Image
            src={image_path}
            alt={name}
            layout='responsive'
            width={300}
            height={150}
            onClick={() => setShowDetail(true)}
            className='cursor-pointer '
         />

         <p className='my-2 text-center'>{name}</p>
         <AnimatePresence>
            {showDetail && (
               <motion.div
                  className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-black-100 dark:text-gray-100 md:grid-cols-2 gap-x-12 '
                  variants={animation}
                  animate='visible'
                  initial='hidden'
                  exit={{
                     opacity: 0,
                     transition: {
                        duration: 0.3,
                     },
                  }}>
                  <motion.div
                     variants={stagger}
                     initial='initial'
                     animate='animate'>
                     <motion.div
                        className='border-4 border-gray-100 '
                        variants={fadeInUp}>
                        <Image
                           src={image_path}
                           alt={name}
                           className='overflow-hidden'
                           layout='responsive'
                           width={300}
                           height={150}
                        />
                     </motion.div>
                     <motion.div
                        className='flex justify-center my-4 space-x-3'
                        variants={fadeInUp}>
                        <a
                           href={github_url}
                           className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500 '>
                           <AiFillGithub /> <span>Github</span>
                        </a>
                        <a
                           href={deployed_url}
                           className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500'>
                           <AiFillProject /> <span>Project</span>
                        </a>
                     </motion.div>
                  </motion.div>
                  <motion.div
                     variants={stagger}
                     initial='initial'
                     animate='animate'>
                     <motion.h2
                        className='mb-3 text-xl font-medium md:text-2xl '
                        variants={fadeInUp}>
                        {name}
                     </motion.h2>
                     <motion.h3
                        className='my-3 text-base font-medium'
                        variants={fadeInUp}>
                        {description}
                     </motion.h3>

                     <motion.div
                        className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'
                        variants={fadeInUp}>
                        {key_points.map((value, i) => (
                           <span
                              key={i}
                              className='p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-black-500'>
                              {value}
                           </span>
                        ))}
                     </motion.div>
                  </motion.div>

                  <button
                     className='absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-black-300'
                     onClick={() => setShowDetail(false)}>
                     <MdClose size={30} />
                  </button>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   )
}

export default ProjectCard
