import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Sidebar from '../components/Sidebar'
import data_projects from '../data/projects'
import '../styles/index.css'

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider attribute='class'>
         <div className='grid grid-cols-12 gap-6 px-5 mt-16 mb-16 font-serif lg:mb-0 md:mb-16 sm:px-20 md:px-32 '>
            <div className='col-span-12 shadow-lg lg:col-span-3'>
               <Sidebar />
            </div>
            <div className='col-span-12 bg-white shadow-lg dark:text-white dark:bg-black lg:col-span-9 rounded-2xl'>
               {/* //Navbar */}
               <Navbar />
               <Component {...pageProps} />
            </div>
         </div>
      </ThemeProvider>
   )
}

export default MyApp
