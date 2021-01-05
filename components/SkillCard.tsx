import { FunctionComponent } from 'react'
import { expertise } from '../types'

const SkillCard: FunctionComponent<{ skill: expertise }> = ({
   skill: { Icon, title, about },
}) => (
   <div className=''>
      <div className=''>
         <Icon />
         <div className=''>
            <h6 className=''>{title}</h6>
            <p className=''>{about}</p>
         </div>
      </div>
   </div>
)

export default SkillCard
