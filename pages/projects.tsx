import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import ProjectCard from '../components/ProjectCard'
import data_projects from '../data/projects'
import { pageAnimation, fadeInUp, stagger } from '../animations'
import { log } from 'console'

const Projects = () => {
   const [projects, setProjects] = useState(data_projects)
   const [active, setActive] = useState('All')

   //TODO use active

   const handleFilterCategory = (category: string) => {
      if (category === 'All') {
         setProjects(data_projects)
         setActive(category)
         return
      }
      console.log(projects)

      const new_array = data_projects.filter(project =>
         project.category.includes(category)
      )
      console.log(new_array)

      setProjects(new_array)
      setActive(category)
   }

   return (
      <motion.div
         className='px-5 py-2 overflow-y-scroll'
         style={{ height: '70vh' }}
         variants={pageAnimation}
         animate='visible'
         initial='hidden'
         exit='exit'>
         {/* Projects Navbar */}
         <nav className='flex px-3 py-2 space-x-3 overflow-x-auto list-none bg-gray-200 rounded-lg dark:bg-gray-900'>
            {/* //use className */}
            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'All' ? 'text-green' : ''
               }`}
               onClick={() => handleFilterCategory('All')}>
               All
            </li>
            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'react' ? 'text-green' : ''
               }`}
               // use typescript to send value
               onClick={() => handleFilterCategory('react')}>
               React
            </li>

            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'mongo' ? 'text-green' : ''
               }`}
               onClick={() => handleFilterCategory('mongo')}>
               Mongo
            </li>
            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'express' ? 'text-green' : ''
               }`}
               onClick={() => handleFilterCategory('express')}>
               Express{' '}
            </li>

            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'django' ? 'text-green' : ''
               }`}
               onClick={() => handleFilterCategory('django')}>
               Django
            </li>
         </nav>

         <motion.div
            className='grid grid-cols-12 gap-4 my-3 '
            variants={stagger}
            initial='initial'
            animate='animate'>
            {/* <AnimatePresence> */}
            {projects.map(project => (
               <motion.div
                  variants={fadeInUp}
                  // exit={{
                  //    opacity: 0,
                  //    transition: {
                  //       delay: 0.3,
                  //    },
                  // }}
                  key={project.id}
                  className='col-span-12 p-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-900 sm:col-span-6 lg:col-span-4'>
                  <ProjectCard project={project} key={project.id} />
               </motion.div>
            ))}
            {/* </AnimatePresence> */}
         </motion.div>
      </motion.div>
   )
}

export default Projects
