import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'

export default function Sidebar() {
   const { theme, setTheme } = useTheme()

   const changeMode = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }

   return (
      <div className='h-full p-4 font-sans text-base text-center bg-white rounded-2xl dark:bg-black dark:text-white '>
         <img
            src='https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg'
            alt='avatar'
            className='w-32 h-32 mx-auto border rounded-full'
         />
         <h3 className='my-4 text-3xl font-semibold tracking-wider font-kaushan'>
            <span className='text-green '>Sumit</span> Dey
         </h3>
         <p className='px-2 py-1 my-3 font-medium bg-gray-200 rounded-full dark:bg-gray-900'>
            Web Developer
         </p>
         {/* Resume */}
         <a
            download='resume.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-900'>
            <GiTie className='w-6 h-6' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
            <a href='https://www.facebook.com/profile.php?id=100015327075818'>
               <AiFillYoutube className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/_sumax__/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/_sumax__/'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-gray-900'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>Kolkata,India </span>
            </div>
            <p className='my-2 '> code.sumax@gmail.com </p>
            <p className='my-2'> 8514961665 / 8640960375 </p>
         </div>

         {/* Email Button */}
         {/* //TODO FIX on hover scale is not working */}
         <button
            className='w-8/12 px-5 py-2 text-white rounded-full cursor-pointer hover:scale-105 focus:outline-none'
            style={{
               backgroundImage: 'linear-gradient(90deg,#00f260,#0575e6)',
            }}
            onClick={() => window.open('mailto:code.sumax@gmail.com')}>
            Email me
         </button>
         <button
            onClick={() => changeMode()}
            className='w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer focus:outline-none hover:scale-105 '
            style={{
               backgroundImage: 'linear-gradient(90deg,#00f260,#0575e6)',
            }}>
            {/* //TODO something better */}
            Change Mode
         </button>
      </div>
   )
}
