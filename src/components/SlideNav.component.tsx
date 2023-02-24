import Link from 'next/link'
import { type FC } from 'react'

const SlideNav: FC = () => {
  return (
    <nav className='h-full max-w-[120px] p-2'>
      navbar
      <div className='flex flex-col gap-4 my-4'>
        <Link href={'/editor'}>Editor</Link>
        <Link href={'/'}>Home</Link>
      </div>
    </nav>
  )
}

export default SlideNav
