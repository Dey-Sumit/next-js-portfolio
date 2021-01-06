import Bar from '../components/Bar'
import { languages, tools } from '../data/resume'

export default function About() {
   return (
      <div className='px-6 py-2 '>
         <div className='grid gap-6 md:grid-cols-2'>
            <div className=''>
               <h5 className='my-3 text-2xl font-bold'>Education</h5>
               <div className=''>
                  <h5 className='my-2 text-2xl font-bold'>
                     Computer Science Engineering
                  </h5>
                  <p className='font-semibold'>
                     Academy of Technology (2017-2021)
                  </p>
                  <p className='my-3'>
                     I am currently pursuing B.tech in Computer Science
                     Engineering from Academy of Technology
                  </p>
               </div>
            </div>
            <div className=''>
               <h5 className='my-3 text-2xl font-bold'>Experience</h5>
               <div className=''>
                  <h5 className='my-2 text-2xl font-bold'>Internship</h5>
                  <p className='font-semibold'>Tata Consultancy Services</p>
                  <p className='my-3'>
                     Test suitability of an website for blind and color-blind
                     persons using Selenium
                  </p>
               </div>
            </div>
         </div>
         {/*Languages & Tools */}
         <div className='grid gap-9 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar value={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar value={tool} key={i} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}
