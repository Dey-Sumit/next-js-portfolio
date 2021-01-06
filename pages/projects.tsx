import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import data_projects from '../data/projects'
// import data_projects from './data/projects_data'
// import ProjectCard from './ProjectCard';
// import { motion } from 'framer-motion'
const Projects = () => {
   const [projects, setProjects] = useState(data_projects)
   const [active, setActive] = useState('All')

   const handleFilterCategory = (category: string) => {
      if (category === 'All') {
         setProjects(data_projects)
         return
      }
      const new_array = data_projects.filter(project =>
         project.category.includes(category)
      )
      setProjects(new_array)
      setActive(category)
   }

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
      <div className='px-5 py-2 overflow-y-scroll' style={{ height: '70vh' }}>
         {/* Projects Navbar */}
         <nav className='flex px-3 py-2 space-x-3 overflow-x-auto list-none bg-gray-200 rounded-lg dark:bg-gray-900'>
            {/* //use className */}
            <li
               className={`cursor-pointer hover:text-green `}
               onClick={() => handleFilterCategory('All')}>
               All
            </li>
            <li
               className='cursor-pointer hover:text-green'
               // use typescript to send value
               onClick={() => handleFilterCategory('react')}>
               React
            </li>

            <li
               className='cursor-pointer hover:text-green'
               onClick={() => handleFilterCategory('mongo')}>
               Mongo
            </li>
            <li
               className='cursor-pointer hover:text-green'
               onClick={() => handleFilterCategory('express')}>
               Express{' '}
            </li>

            <li
               className='cursor-pointer hover:text-green'
               onClick={() => handleFilterCategory('django')}>
               Django
            </li>
            <li
               className='cursor-pointer hover:text-green'
               onClick={() => handleFilterCategory('express')}>
               Express{' '}
            </li>

            <li
               className='cursor-pointer hover:text-green'
               onClick={() => handleFilterCategory('django')}>
               Django
            </li>
         </nav>

         <div className='grid grid-cols-12 gap-4 my-3 '>
            {projects.map(project => (
               <ProjectCard key={project.name} project={project} />
            ))}
            {projects.map(project => (
               <ProjectCard key={project.name} project={project} />
            ))}
         </div>
      </div>
   )
}

export default Projects
