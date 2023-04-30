import { COLORS } from "@constants/colors.const"
import { type FC } from "react"
import { DocumentIcon } from "./icons/Document.icon"

import { BookIcon } from './icons/Book.icon'
import { NewIcon } from './icons/New.icon'
import { SearchIcon } from "./icons/Search.icon"
import { LinkNav } from './navbar/LInkNav.component'
import { DraftsIcon } from "./icons/Drafts.icon"
import { ButtonLogout } from "./ButtonLogout"

export const btnStyle = 'text-white bg-primary  rounded-2xl p-2 w-full'

export const dotStyle = "w-4 h-4  rounded-full"

export const DotsNavbar: FC = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-2">
      <div className={dotStyle + " bg-white"}></div>
      <div className={dotStyle + " bg-light-violet"}></div>
      <div className={dotStyle + " bg-light-blue"}></div>
    </div>
  )
}

const SlideNav = (): JSX.Element => {
  return (
    <nav className='w-full h-full border border-solid  border-r border-b-0 border-l-0 border-t-0 p-4'>
      <header className="h-[72px]">
        <DotsNavbar />
      </header>
      <section className="flex flex-col justify-between items-start h-[calc(100% - 72px)]">
        <div
          className="flex flex-col gap-4 "
        >
          <LinkNav
            href="/documents/search/"
            label='Search'
            icon={<SearchIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href="/"
            label="New document"
            icon={<NewIcon className='w-6 h-6' color={COLORS.WHITE} />}
          />
          <LinkNav
            href="/documents"
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
        </div>
        <div>
          <ButtonLogout />
        </div>
      </section>
    </nav >
  )
}

export default SlideNav
