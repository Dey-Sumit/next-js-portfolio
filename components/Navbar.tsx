import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Navbar = () => {
   const { pathname, push } = useRouter()

   const [active, setActive] = useState('')

   useEffect(() => {
      if (pathname === '/') setActive('About')
      else if (pathname === '/projects') setActive('Projects')
      else if (pathname === '/resume') setActive('Resume')
   }, [active])

   const navbar_variant = {
      hidden: {
         y: '-30vh',
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            delay: 0.2,
            duration: 0.7,
            type: 'spring',
         },
      },
   }

   return (
      <div className='flex justify-between px-5 py-3 my-3'>
         <span className='text-2xl font-bold border-b-4 border-green'>
            {active}
         </span>

         <div className='text-xl font-normal'>
            {active !== 'About' && (
               <Link href='/'>
                  <a>
                     <span
                        className='mx-2 cursor-pointer hover:border-b-4 hover:border-green'
                        onClick={() => setActive('About')}>
                        About
                     </span>
                  </a>
               </Link>
            )}
            {active !== 'Resume' && (
               <Link href='/resume'>
                  <a>
                     <span
                        className='mx-2 cursor-pointer hover:border-b-4 hover:border-green'
                        onClick={() => setActive('Resume')}>
                        Resume
                     </span>
                  </a>
               </Link>
            )}

            {active !== 'Projects' && (
               // TODO fix hover
               <Link href='/projects'>
                  <a>
                     <span
                        className='mx-2 cursor-pointer hover:text-green hover:border-green'
                        onClick={() => setActive('Projects')}>
                        Projects
                     </span>
                  </a>
               </Link>
            )}
         </div>
      </div>
   )
}

export default Navbar
