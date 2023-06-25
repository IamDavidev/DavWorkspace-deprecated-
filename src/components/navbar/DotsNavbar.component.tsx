import { type FC } from 'react'

export const dotStyle = 'w-4 h-4  rounded-full'

export const DotsNavbar: FC = () => {
  return (
    <div className='flex flex-row gap-2'>
      <div className={dotStyle + ' bg-white'}></div>
      <div className={dotStyle + ' bg-light-violet'}></div>
      <div className={dotStyle + ' bg-light-blue'}></div>
    </div>
  )
}