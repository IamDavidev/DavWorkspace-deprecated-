import { type FC } from 'react'
import { type IPropsIcon } from '@lib/models/Icon.interface'


export const ExpandIcon: FC<IPropsIcon> = (props) => {
  const { className, strokeColor } = props
  return (
    <>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'
           className={className}>
        <path d='M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14' stroke={strokeColor} strokeWidth='2'
              strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </>
  )
}