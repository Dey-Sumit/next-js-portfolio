import { FunctionComponent } from 'react'
import { expertise } from '../types'

const SkillCard: FunctionComponent<{ skill: expertise }> = ({
   skill: { Icon, title, about },
}) => (
   <div className='flex items-center p-2 space-x-4 bg-gray-200 rounded-lg dark:bg-gray-800'>
      <Icon className='w-12 h-12 text-green' />
      <div className=''>
         <h6 className='font-semibold'>{title}</h6>
         <p className=''>{about}</p>
      </div>
   </div>
)

export default SkillCard
