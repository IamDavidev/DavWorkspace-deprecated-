import { type FC } from 'react'
import Image from 'next/image'

import { COLORS } from '@constants/colors.const'
import { ButtonLogout } from './ButtonLogout'
import { LinkNav } from './navbar/LInkNav.component'
import { BookIcon, DocumentIcon, DraftsIcon, FavoritesIcon } from './icons'
import { BtnCreateNewDocument } from '@components/BtnCreateNewDocument'

export const dotStyle = 'w-4 h-4  rounded-full'

export const DotsNavbar: FC = () => {
  return (
    <div className='flex flex-row gap-2'>
      <div className={dotStyle + ' bg-white'}></div>
      <div className={dotStyle + ' bg-light-violet'}></div>
      <div className={dotStyle + ' bg-light-blue'}></div>
    </div>
  )
}

interface IProfileProps {
  imageSrc: string
  name: string
}

export const Profile: FC<IProfileProps> = (props) => {
  const { name, imageSrc } = props
  return (
    <div className='flex flex-row gap-2 justify-start items-center'>
      <Image width={96} height={96} src={imageSrc} alt={name} className='rounded-full w-12 h-12' />
      <span className='text-xs font-bold'>{name}</span>
    </div>
  )
}

interface ISlideNavProps {
  imageSrc: string
  name: string
  email?: string
}


const SlideNav: FC<ISlideNavProps> = ({ imageSrc, name }) => {
  return (
    <nav
      className='w-full h-full border border-solid  border-r border-b-0 border-l-0 border-t-0 border-white min-w-[240px] max-w-[240px]'>
      <header className='h-[72px] p-4'>
        <DotsNavbar />
      </header>
      <section className='flex flex-col justify-between items-start h-[calc(100%-72px)] py-8 px-4'>
        <ul className='flex flex-col gap-4 '>
          <BtnCreateNewDocument />
          <LinkNav
            href='/dashboard/favorites/'
            label='Favorites'
            icon={<FavoritesIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href='/dashboard/documents'
            label='Documents'
            icon={<DocumentIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href='/dashboard/notebooks'
            label='Notebooks'
            icon={<BookIcon className='w-6 h-6 ' color={COLORS.WHITE} />}
          />
          <span className='w-32 h-[1px] bg-white' />
          <LinkNav
            href='/dashboard/drafts/'
            label='Drafts'
            icon={<DraftsIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
        </ul>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <Profile imageSrc={imageSrc} name={name} key={name} />
          <ButtonLogout />
        </div>
      </section>
    </nav>
  )
}

export default SlideNav
