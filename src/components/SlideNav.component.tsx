import { type FC } from 'react'
import Image from 'next/image'

import { COLORS } from '@constants/colors.const'
import { ButtonLogout } from './ButtonLogout'
import { LinkNav } from './navbar/LInkNav.component'
import { BookIcon, DocumentIcon, DraftsIcon, FavoritesIcon } from './icons'
import { BtnCreateNewDocument } from '@components/BtnCreateNewDocument'
import { DotsNavbar } from '@components/navbar/DotsNavbar.component'


interface ProfileProps {
  imageSrc: string
  name: string
}

export const Profile: FC<ProfileProps> = (props) => {
  const { name, imageSrc } = props
  return (
    <div className='flex flex-row gap-2 justify-start items-center'>
      <Image width={96} height={96} src={imageSrc} alt={name} className='rounded-full w-12 h-12' />
      <span className='text-xs font-bold'>{name}</span>
    </div>
  )
}

interface SlideNavProps {
  imageSrc: string
  name: string
  email?: string
}


const SlideNav: FC<SlideNavProps> = ({ imageSrc, name }) => {
  return (
    <nav
      className='w-full h-full border border-solid  border-r border-b-0 border-l-0 border-t-0 border-white min-w-[240px] max-w-[240px]'>
      <header className='h-[72px] p-4'>
        <DotsNavbar />
      </header>
      <section className='flex flex-col justify-between items-start h-[calc(100%-72px)] py-8 px-4'>
        <div className='flex flex-col gap-4 '>
          <BtnCreateNewDocument />
          <LinkNav
            href='/dashboard/documents/favorites/'
            label='Favorites'
            icon={<FavoritesIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href='/dashboard/documents'
            label='Documents'
            icon={<DocumentIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href='/dashboard/documents/notebooks'
            label='Notebooks'
            icon={<BookIcon className='w-6 h-6 ' color={COLORS.WHITE} />}
          />
          <span className='w-32 h-[1px] bg-white' />
          <LinkNav
            href='/dashboard/documents/drafts/'
            label='Drafts'
            icon={<DraftsIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
        </div>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <Profile imageSrc={imageSrc} name={name} key={name} />
          <ButtonLogout />
        </div>
      </section>
    </nav>
  )
}

export default SlideNav
