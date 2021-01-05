import Bar from '../components/Bar'
import { languages, tools } from '../data/resume'

export default function About() {
   return (
      <div className='p-6 '>
         <div className='grid md:grid-cols-2 gap-9'>
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
                     I am currently persuing B.tech in Computer Science
                     Engineering from Academy of Technology
                     <span>CGPA (till 5th sem) : 7.5 </span>
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
