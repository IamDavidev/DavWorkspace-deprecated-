import { type FC } from 'react'

const SlideNav: FC = () => {
  return (
    <nav>
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
        new note
      </button>
      <ul className='flex flex-col'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href=''>All Notes</a>
        </li>
        <li>
          <a href='/notebook'>Notebook</a>
        </li>
      </ul>
    </nav>
  )
}

export default SlideNav
