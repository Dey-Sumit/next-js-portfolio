import { FunctionComponent } from 'react'
import { project } from '../types'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
// TODO Github

const ProjectCard: FunctionComponent<{ project: project }> = ({
   project: { name, image_path, deployed_url, github_url },
}) => {
   return (
      <div className='col-span-12 p-2 bg-gray-200 rounded-lg  cursor-pointer dark:bg-gray-800 sm:col-span-6 lg:col-span-4'>
         {/* <a href={deployed_url} target='_blank' rel='noopener noreferrer'> */}

         <Image
            src={image_path}
            alt={name}
            layout='responsive'
            width={300}
            height={150}
         />

         {/* </a> */}

         <div className='flex items-center justify-center my-2 text-lg'>
            <a href={github_url} target='_blank' rel='noopener noreferrer'>
               <AiFillGithub className='w-8 h-8 mr-3' />
            </a>
            {name}
         </div>
      </div>
   )
}

export default ProjectCard
