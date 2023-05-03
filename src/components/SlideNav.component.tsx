import { type FC, type ReactNode } from "react"
import { DocumentIcon } from "./icons/Document.icon"

import Image from "next/image"
import { ButtonLogout } from "./ButtonLogout"
import { BookIcon } from './icons/Book.icon'
import { DraftsIcon } from "./icons/Drafts.icon"
import { FavoritesIcon } from "./icons/Favorites.icon"
import { NewIcon } from './icons/New.icon'
import { LinkNav } from './navbar/LInkNav.component'
import { COLORS } from "@constants/colors.const"

export const btnStyle = 'text-white bg-primary  rounded-2xl p-2 w-full'

export const dotStyle = "w-4 h-4  rounded-full"

export interface LinkDB {
  href : string
  label: string
  icon: ReactNode
} 

export const LINKS_DB = {

  }


export const DotsNavbar: FC = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-2">
      <div className={dotStyle + " bg-white"}></div>
      <div className={dotStyle + " bg-light-violet"}></div>
      <div className={dotStyle + " bg-light-blue"}></div>
    </div>
  )
}

interface IProfileProps {
  imageSrc: string
  name: string
}

export function Profile({
  imageSrc,
  name,

}: IProfileProps): JSX.Element {
  return (
    <div className="flex flex-row gap-2 justify-start items-center">
      <Image width={96} height={96} src={imageSrc} alt={name} className="rounded-full w-12 h-12" />
      <span className="text-xs font-bold">{name}</span>
    </div>
  )
}

interface ISlideNavProps {
  imageSrc: string
  name: string
  email?: string
}

const SlideNav = ({ imageSrc, name }: ISlideNavProps): JSX.Element => {
  return (
    <nav className='w-full h-full border border-solid  border-r border-b-0 border-l-0 border-t-0'>
      <header className="h-[72px] p-4">
        <DotsNavbar />
      </header>
      <section className="flex flex-col justify-between items-start h-[calc(100%-72px)] py-8 px-4">
        <ul className="flex flex-col gap-4 ">
          <LinkNav
            href="/documents/favorites/"
            label='Favorites'
            icon={<FavoritesIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href="/"
            label="New document"
            icon={<NewIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href="/dashboard/documents"
            label="Documents"
            icon={<DocumentIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href='/notebooks'
            label='Notebooks'
            icon={<BookIcon className='w-5 h-5 ' color={COLORS.WHITE} />}
          />
          <span className="w-20 h-[1px] bg-white" />
          <LinkNav
            href="/documents/drafts"
            label="Drafts"
            icon={<DraftsIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
        </ul>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Profile imageSrc={imageSrc} name={name} key={name} />
          <ButtonLogout />
        </div>
      </section>
    </nav >
  )
}

export default SlideNav
