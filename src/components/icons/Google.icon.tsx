import { type IPropsIcon } from '@lib/models/Icon.interface'
import { type FC } from 'react'

export const GoogleIcon: FC<IPropsIcon> = ({
  className,
  styles
}): JSX.Element => {
  return (
    <>
      <svg
        className={className}
        viewBox='0 0 45 45'
        fill='none'
        style={styles}
        xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_i_15_154)'>
          <path
            d='M5.72727 37.0076H12.0909V21.553L3 14.7349V34.2803C3 35.7894 4.22273 37.0076 5.72727 37.0076Z'
            fill='#4285F4'
          />
          <path
            d='M33.9091 37.0076H40.2727C41.7818 37.0076 43 35.7849 43 34.2803V14.7349L33.9091 21.553'
            fill='#34A853'
          />
          <path
            d='M33.9091 9.73501V21.5532L43 14.735V11.0986C43 7.72592 39.15 5.80319 36.4545 7.82592'
            fill='#FBBC04'
          />
          <path
            d='M12.0909 21.553V9.73486L23 17.9167L33.9091 9.73486V21.553L23 29.7349'
            fill='#EA4335'
          />
          <path
            d='M3 11.0986V14.735L12.0909 21.5532V9.73501L9.54546 7.82592C6.84546 5.80319 3 7.72592 3 11.0986'
            fill='#C5221F'
          />
        </g>
        <defs>
          <filter
            id='filter0_i_15_154'
            x='0'
            y='0'
            width='45'
            height='45.5'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='0.5' />
            <feGaussianBlur stdDeviation='1.25' />
            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
            />
            <feBlend
              mode='normal'
              in2='shape'
              result='effect1_innerShadow_15_154'
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}
