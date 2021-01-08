import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import '../styles/index.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps, router }) {
   return (
      <ThemeProvider attribute='class'>
         {/* //TODO add better box shadow */}
         <div className='grid grid-cols-12 gap-6 px-5 font-serif my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 '>
            <div className='col-span-12 shadow-lg lg:col-span-3'>
               <Sidebar />
            </div>

            <div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-lg dark:text-white dark:bg-black lg:col-span-9 rounded-2xl'>
               <Navbar />
               <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} key={router.route} />
               </AnimatePresence>
            </div>
         </div>
      </ThemeProvider>
   )
}

export default MyApp
