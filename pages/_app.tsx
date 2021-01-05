import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
   return (
      <div className='grid gap-6 mt-16 font-serif text-gray-700 md:px-44 sm:px-20 md:grid-cols-12'>
         <div className='shadow-lg md:col-span-3'>
            <Sidebar />
         </div>
         <div className='bg-white shadow-lg md:col-span-9 rounded-2xl'>
            {/* //Navbar */}
            <Navbar />

            <Component {...pageProps} />
         </div>
      </div>
   )
}

export default MyApp
