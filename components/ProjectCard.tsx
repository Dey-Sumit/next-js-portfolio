import { FunctionComponent } from 'react'
import { project } from '../types'
// TODO Github

const ProjectCard: FunctionComponent<{ project: project }> = ({
   project: { name, image, deployed_url, github_url },
}) => {
   return (
      <div className='w-1/3 p-2 my-3 bg-gray-300 rounded-lg'>
         <figure className=''>
            <a href={deployed_url} target='_blank' rel='noopener noreferrer'>
               <img src={image} alt={name} className='' />
            </a>

            <div className='my-2 text-center'>
               <a
                  href={github_url}
                  target='_blank'
                  rel='noopener noreferrer'></a>
               {name}
            </div>
         </figure>
      </div>
   )
}

export default ProjectCard
