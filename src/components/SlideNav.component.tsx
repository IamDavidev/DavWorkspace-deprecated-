import { COLORS } from '@constants/colors.const'
import { UserServerRepository } from '@lib/repositories/UserServer.repository'

import { BookIcon } from './icons/Book.icon'
import { EditIcon } from './icons/Edit.icon'
import { NewIcon } from './icons/New.icon'
import { NotesIcon } from './icons/Notes.icon'
import { LinkNav } from './navbar/LInkNav.component'
import { SignOutBtn } from './navbar/SignOut.component'
import { SignInSocial } from './navbar/SingInSocial.component'

export const btnStyle = 'text-white bg-primary  rounded-2xl p-2 w-full'

const SlideNav = async (): Promise<JSX.Element> => {
  const { user } = await UserServerRepository.getUserServer()
  return (
    <nav className='h-full w-full text-link bg-secondary p-2 rounded-tr-2xl rounded-br-2xl flex flex-col justify-between items-start sticky top-8'>
      <div className='flex flex-col gap-6 my-4 w-full'>
        <LinkNav
          label='New note'
          icon={<NewIcon className='w-5 h-5 ' color={COLORS.LINK} />}
        />
        <LinkNav
          href='/notebooks'
          label='Notebooks'
          icon={<BookIcon className='w-5 h-5 ' color={COLORS.LINK} />}
        />
        <LinkNav
          href='/notebooks/all-notes'
          label='View Docs'
          icon={<NotesIcon className='w-5 h-5 ' color={COLORS.LINK} />}
        />
        <LinkNav
          href='/dashboard/editor/5f9f1b9b0b9b9b0b9b0b9b0b'
          label='Editor '
          icon={<EditIcon className='w-5 h-5 ' color={COLORS.LINK} />}
        />
      </div>
      <div>
        {user !== null ? <SignOutBtn /> : <SignInSocial />}
        {user != null && (
          <span className='text-xs text-white font-bold text-center w-full my-4'>
            {user.email}
          </span>
        )}
      </div>
    </nav>
  )
}

export default SlideNav
