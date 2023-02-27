import Link from 'next/link'
import { type FC } from 'react'

const btnStyle = 'text-white bg-primary  rounded-2xl p-2 w-full'

const SlideNav: FC = (): JSX.Element => {
  return (
    <nav className='h-full w-full text-link bg-secondary p-2 rounded-tr-2xl rounded-br-2xl flex flex-col justify-between items-start sticky top-8'>
      <div className='flex flex-col gap-4 my-4 w-full'>
        <button className='text-start tracking-wide'>New note</button>
        <Link href={'/notebooks'}>
          <span className='w-full tracking-wide'>Notebooks</span>
        </Link>
        <Link href={'/notebooks/all-notes'}>All Notes</Link>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <Link href={'/login'} className={btnStyle}>
          <span className='mx-auto w-full'>Login</span>
        </Link>
        <Link href={'/register'} className={btnStyle}>
          Register
        </Link>
      </div>
    </nav>
  )
}

export default SlideNav
