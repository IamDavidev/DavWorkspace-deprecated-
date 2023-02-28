import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const GithubIcon: FC<IPropsIcon> = ({
  color,
  className,
  styles
}): JSX.Element => {
  return (
    <>
      <svg
        className={className}
        viewBox='0 0 24 24'
        fill='none'
        style={styles}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.16311 20.0038C4.0466 21.5019 4.0466 17.507 2 17.0076M16.3262 22V19.1349C16.3646 18.6587 16.2987 18.18 16.1328 17.7305C15.967 17.2811 15.705 16.8712 15.3643 16.5283C16.9897 16.3514 18.6569 15.96 19.9078 14.9104C22.4505 12.777 22.7408 8.17174 20.4194 5.79195C20.6401 5.21491 20.749 4.60912 20.7468 4.00422C20.7451 3.50309 20.6671 3.00257 20.5134 2.51952C20.4604 2.35296 20.3983 2.18848 20.3273 2.02676C20.3273 2.02676 20.1473 1.97465 19.7655 2.01587C19.3996 2.05537 18.8484 2.18059 18.0926 2.51952C17.5945 2.74291 17.0075 3.05915 16.3262 3.50487C15.1535 3.19468 13.9491 3.03958 12.7447 3.03958C11.5402 3.03958 10.3358 3.19468 9.16311 3.50487C8.52344 3.08638 7.96692 2.78204 7.48903 2.56152C6.91169 2.2951 6.44909 2.15102 6.0932 2.07579C5.45715 1.94132 5.162 2.02676 5.162 2.02676C4.88502 2.65747 4.74484 3.33029 4.74248 4.00422C4.74035 4.60912 4.84926 5.21491 5.0699 5.79195C2.87603 8.04094 3.02336 12.2686 5.162 14.5166C6.44333 15.8634 8.31029 16.3382 10.125 16.5582C9.78834 16.8978 9.5287 17.3027 9.36297 17.7466C9.19724 18.1906 9.12914 18.6636 9.16311 19.1349V22'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  )
}