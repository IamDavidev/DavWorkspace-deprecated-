import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const NewIcon: FC<IPropsIcon> = ({
  color,
  className,
  styles
}): JSX.Element => {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      style={styles}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2V8H20M14 2L20 8M12 18V12M9 15H15'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
