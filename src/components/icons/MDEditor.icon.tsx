import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const MDEditor: FC<IPropsIcon> = ({
  className
}): JSX.Element => {
  return (
    <svg className={className} viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.66 32.3499L12 26.6899L6.35001 32.3499C5.23066 33.4686 4.46822 34.894 4.15911 36.446C3.85 37.998 4.00812 39.6068 4.61347 41.0689C5.21882 42.531 6.24419 43.7808 7.5599 44.66C8.87561 45.5393 10.4225 46.0086 12.005 46.0086C13.5875 46.0086 15.1344 45.5393 16.4501 44.66C17.7658 43.7808 18.7912 42.531 19.3965 41.0689C20.0019 39.6068 20.16 37.998 19.8509 36.446C19.5418 34.894 18.7794 33.4686 17.66 32.3499Z" stroke="url(#paint0_linear_619_292)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 3.00006C29.2626 2.73741 29.5744 2.52907 29.9176 2.38693C30.2608 2.24479 30.6286 2.17163 31 2.17163C31.3714 2.17163 31.7392 2.24479 32.0824 2.38693C32.4256 2.52907 32.7374 2.73741 33 3.00006C33.2626 3.2627 33.471 3.57451 33.6131 3.91767C33.7553 4.26083 33.8284 4.62862 33.8284 5.00006C33.8284 5.37149 33.7553 5.73929 33.6131 6.08245C33.471 6.42561 33.2626 6.73741 33 7.00006L19.5 20.5001L14 22.0001L15.5 16.5001L29 3.00006Z" stroke="url(#paint1_linear_619_292)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_619_292" x1="12.005" y1="26.6899" x2="12.005" y2="46.0086" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8a8aff" />
          <stop offset="1" stopColor="#DBE2EF" />
        </linearGradient>
        <linearGradient id="paint1_linear_619_292" x1="23.9142" y1="2.17163" x2="23.9142" y2="22.0001" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8a8aff" />
          <stop offset="1" stopColor="#DBE2EF" />
        </linearGradient>
      </defs>
    </svg>


  )
}