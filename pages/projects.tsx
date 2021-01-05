import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import data_projects from '../data/projects'
// import data_projects from './data/projects_data'
// import ProjectCard from './ProjectCard';
// import { motion } from 'framer-motion'
const Projects = () => {
   const [projects, setProjects] = useState(data_projects)
   const [active, setActive] = useState('All')

   // const handleFilterCategory = (name) => {
   //     const new_array = data_projects.filter(project => project.category.includes(name))
   //     setProjects(new_array)
   //     setActive(name)
   // }

   const project_variants = {
      hidden: {
         opacity: 0,
      },
      visible: {
         opacity: 1,
         transition: {
            delay: 0.2,
            duration: 0.6,
         },
      },
      exit: {
         opacity: 0,
         transition: {
            ease: 'easeInOut',
         },
      },
   }

   return (
      <div
         className='p-4'
         // variants={project_variants}
         // initial="hidden"
         // animate="visible"
         // exit="exit"
      >
         <div className='grid'>
            {projects.map(project => (
               <ProjectCard key={project.name} project={project} />
            ))}
         </div>
      </div>
   )
}

export default Projects
