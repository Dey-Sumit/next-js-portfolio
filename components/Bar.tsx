import { FunctionComponent } from 'react'
import { skill } from '../types'

const Bar: FunctionComponent<{ value: skill }> = ({
   value: { Icon, level, name },
}) => {
   const bar_width = `${level}%`
   return (
      <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-gray-800'>
         <div
            className='flex items-center px-4 py-1 rounded-full'
            style={{
               width: bar_width,
               backgroundImage: 'linear-gradient(90deg,#00f260,#0575e6)',
            }}>
            <Icon className='mr-3' /> {name}
         </div>
      </div>
   )
}
export default Bar
