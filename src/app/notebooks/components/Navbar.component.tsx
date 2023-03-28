import { PlusIcon } from '@components/icons/Plus.icon'
import Link from 'next/link'
import { type FC } from 'react'

export const Navbar: FC = (): JSX.Element => {
  return (
    <nav className='flex flex-row justify-between items-center p-9'>
      <span></span>
      <h1 className='text-3xl font-bold'>Notebooks</h1>
      <Link
        href={'/notebooks/create-new'}
        className='text-lg bg-primary hover:scale-105  border border-primary border-solid text-bg [&>svg>path:h] font-bold py-2 px-4 rounded-2xl hover:duration-700 hover:ease-in flex flex-row gap-2 items-center justify-center'>
        <PlusIcon color={'#ffffff'} className='w-6 h-6' />
        create notebook
      </Link>
    </nav>
  )
}
