import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/index.css'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
   return (
      <ThemeProvider attribute='class'>
         <Head>
            {' '}
            <title>Sumit Dey | Web Developer | Freelancer</title>
            <meta
               name='description'
               content='MERN stack developer looking for a job'
            />
            <meta
               name='keywords'
               content='Full Stack Web Developer, Freelancer ,MERN developer'
            />
            {/* <meta name='robots' content='index,follow' /> */}
         </Head>
         {/* //TODO add better box shadow */}
         <div className='grid grid-cols-12 gap-6 px-5 font-serif my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 '>
            <div className='h-full col-span-12 p-4 font-sans text-base text-center bg-white shadow-custom-light dark:shadow-custom-dark lg:col-span-3 rounded-2xl dark:bg-black-300 dark:text-white'>
               <Sidebar />
            </div>

            <div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-md rounded-2xl dark:text-white shadow-custom-light dark:shadow-custom-dark dark:bg-black-300 lg:col-span-9'>
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

// body-bg: #202125
// div bg - black 2
// about inner bg : #0f1115
// inner inner #1f212d
