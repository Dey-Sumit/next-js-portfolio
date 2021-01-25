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
   project: { name, image_path, deployed_url, github_url },
}) => {
   const [showDetail, setShowDetail] = useState(false)

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
                  className='absolute top-0 left-0 z-10 grid w-full h-auto p-10 bg-black rounded-lg md:grid-cols-2 gap-x-12 backdrop bg-opacity-80'
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
                           className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-800 rounded-lg '>
                           <AiFillGithub /> <span>Github</span>
                        </a>
                        <a
                           href={deployed_url}
                           className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-800 rounded-lg'>
                           <AiFillProject /> <span>Project</span>
                        </a>
                     </motion.div>
                  </motion.div>
                  <motion.div
                     variants={stagger}
                     initial='initial'
                     animate='animate'>
                     <motion.h2
                        className='mb-3 text-2xl font-medium '
                        variants={fadeInUp}>
                        {name}
                     </motion.h2>
                     <motion.h3
                        className='my-3 text-base font-medium'
                        variants={fadeInUp}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde sunt minus et. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde sunt minus et.
                     </motion.h3>

                     <motion.div
                        className='flex flex-wrap mt-5 space-x-2'
                        variants={fadeInUp}>
                        <span className='p-1 bg-gray-700 rounded-lg'>
                           React
                        </span>
                        <span className='p-1 bg-gray-700 rounded-lg'>
                           Redux
                        </span>
                        <span className='p-1 bg-gray-700 rounded-lg'>
                           Django
                        </span>
                        <span className='p-1 bg-gray-700 rounded-lg'>API</span>
                        <span className='p-1 bg-gray-700 rounded-lg'>API</span>
                        <span className='p-1 bg-gray-700 rounded-lg'>API</span>
                     </motion.div>
                  </motion.div>

                  <button
                     className='absolute top-3 right-3 focus:outline-none'
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
