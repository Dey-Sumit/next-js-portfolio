// import React from 'react';
// import api from '../assets/icons/api.svg'
// import backend from '../assets/icons/backend.svg'
// import algo from '../assets/icons/algo.svg'
// import computer from '../assets/icons/computer.svg'
// import repair from '../assets/icons/repair.svg'
// import puzzle from '../assets/icons/puzzle.svg'

import SkillCard from '../components/SkillCard'
import { about_data } from '../data/about'

// import Skillcard from './Skillcard';
// import { motion } from 'framer-motion'

const About = () => {
   const about_variants = {
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
      <div className='px-6 py-2'>
         <h6 className='my-1 text-base font-medium'>
            I describe myself as someone who's persistent, a quick learner and
            loves problem solving by using simple and scalable solutions.
         </h6>

         <h4 className='my-3 text-xl font-semibold'>What I Offer</h4>
         <div className='grid gap-4 my-3 md:grid-cols-2'>
            {about_data.map(skill => (
               <SkillCard skill={skill} key={skill.title} />
            ))}
         </div>
      </div>
   )
}

export default About
