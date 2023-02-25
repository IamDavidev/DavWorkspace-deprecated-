import Link from 'next/link'
import { type FC } from 'react'

const btnStyle = 'text-white bg-primary  rounded-2xl p-2 w-full'

const SlideNav: FC = (): JSX.Element => {
  return (
    <nav className='h-full max-w-[120px] bg-secondary p-2 rounded-2xl flex flex-col justify-between items-start sticky top-8'>
      <div className='flex flex-col gap-4 my-4 w-full'>
        <Link href={'/editor'}>Editor</Link>
        <Link href={'/'}>Home</Link>
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
