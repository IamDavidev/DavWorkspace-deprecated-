import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const FavoritesIcon: FC<IPropsIcon> = ({
  className,
  color,
  styles
}): JSX.Element => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={styles} >
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3.00012C9.96385 3.00012 9.77134 6.54664 8.55911 7.7997C7.34689 9.05275 3.5782 7.62004 3.05459 9.84415C2.53207 12.0694 5.92235 12.8244 6.34036 14.7336C6.76057 16.6427 4.68922 19.325 6.45916 20.66C8.22911 21.9937 10.1343 18.9748 12 18.9748C13.8656 18.9748 15.7709 21.9937 17.5408 20.66C19.3108 19.325 17.2405 16.6427 17.6596 14.7336C18.0787 12.8244 21.4679 12.0694 20.9454 9.84415C20.4229 7.62004 16.6531 9.05275 15.442 7.7997C14.2297 6.54664 14.0361 3.00012 12 3.00012Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </>
  )
}