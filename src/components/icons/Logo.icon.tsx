import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const LightLogoIcon: FC<IPropsIcon> = ({
  className,
  styles
}): JSX.Element => {
  return (
    <>
      <svg
        style={styles}
        className={className}
        viewBox='0 0 200 200'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect width='200' height='200' rx='50' fill='white' />
        <rect x='55' y='80' width='40' height='40' rx='20' fill='black' />
        <rect x='115' y='60' width='30' height='30' rx='15' fill='black' />
        <rect x='115' y='110' width='30' height='30' rx='15' fill='black' />
      </svg>
    </>
  )
}

export const DarkLogoIcon: FC<IPropsIcon> = ({ className }): JSX.Element => {
  return (
    <>
      <svg
        className={className}
        viewBox='0 0 200 200'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect width='200' height='200' rx='50' fill='black' />
        <rect x='55' y='80' width='40' height='40' rx='20' fill='white' />
        <rect x='115' y='60' width='30' height='30' rx='15' fill='white' />
        <rect x='115' y='110' width='30' height='30' rx='15' fill='white' />
      </svg>
    </>
  )
}
