import { ImageResponse } from 'next/server'

export const size = {
  width: 32,
  height: 32
}

export const contentType = 'image/png'


const Icon: () => ImageResponse = () => {
  return new ImageResponse(
    (
      <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M16 25.3334H26.6666M5.33331 22.6667L13.3333 14.6667L5.33331 6.66669' stroke='#DBE2EF'
              strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ), {
      ...size
    }
  )
}

export default Icon