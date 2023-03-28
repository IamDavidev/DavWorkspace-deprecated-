import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const PlusIcon: FC<IPropsIcon> = ({
  className,
  color,
  styles
}): JSX.Element => {
  return (
    <svg
      className={className}
      style={styles}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5 12H12M19 12H12M12 12V19M12 12V5'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
