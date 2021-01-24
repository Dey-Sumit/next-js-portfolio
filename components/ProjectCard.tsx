import { FunctionComponent } from 'react'
import { Project } from '../types'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
// TODO Github
import { motion } from 'framer-motion'

const ProjectCard: FunctionComponent<{ project: Project }> = ({
   project: { name, image_path, deployed_url, github_url },
}) => {
   return (
      <motion.div>
         {/* <a href={deployed_url} target='_blank' rel='noopener noreferrer'> */}

         <Image
            src={image_path}
            alt={name}
            layout='responsive'
            width={300}
            height={150}
         />

         {/* </a> */}

         <div className='flex items-center justify-center my-2 text-base'>
            <a href={github_url} target='_blank' rel='noopener noreferrer'>
               <AiFillGithub className='w-8 h-8 mr-3' />
            </a>
            {name}
         </div>
      </motion.div>
   )
}

export default ProjectCard
