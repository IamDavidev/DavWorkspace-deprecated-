import { COLORS } from '@constants/colors.const'
import Link from 'next/link'
import { type FC } from 'react'
import { BookIcon } from './icons/Book.icon'
import { EditIcon } from './icons/Edit.icon'
import { LogInIcon } from './icons/LogIn.icon'
import { NewIcon } from './icons/new.icon'
import { NotesIcon } from './icons/Notes.icon'
import { UserPlus } from './icons/UserPlus.icon'

export const btnStyle = 'text-white bg-primary  rounded-2xl p-2 w-full'

export interface IPropsLinkNav {
  href?: string
  label?: string
  icon?: JSX.Element | React.ReactNode
  classNameLink?: string
  children?: React.ReactNode
}

export const LinkNav: FC<IPropsLinkNav> = ({
  href,
  label,
  icon,
  classNameLink,
  children,
  ...props
}): JSX.Element => {
  if (href === undefined || href === null)
    return (
      <button
        className={`w-full h-full flex flex-row gap-3 px-2 items-center ${
          classNameLink ?? ''
        } `}
        {...props}>
        {Boolean(icon) && <span>{icon}</span>}
        {label !== undefined ? (
          <span className=' tracking-wide'>{label}</span>
        ) : (
          children
        )}
      </button>
    )

  return (
    <>
      <Link
        href={href}
        className={`w-full h-full flex flex-row gap-3 justify-start items-center px-2 ${
          classNameLink ?? ''
        } `}>
        {Boolean(icon) && <span>{icon}</span>}
        {label !== undefined ? (
          <span className=' tracking-wide'>{label}</span>
        ) : (
          children
        )}
      </Link>
    </>
  )
}

const SlideNav: FC = (): JSX.Element => {
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
      <div className='flex flex-col gap-4 w-full my-4'>
        <LinkNav
          href='/user/sign-in'
          classNameLink={
            'border border-primary bg-transparent p-2 rounded-lg mx-auto justify-center'
          }
          icon={<LogInIcon className='w-5 h-5' color={COLORS.PRIMARY} />}>
          <span className='mx-auto w-full text-primary font-bold'>Login</span>
        </LinkNav>
        <LinkNav
          href='/user/sign-up'
          icon={<UserPlus className='w-5 h-5' color={COLORS.BG} />}
          classNameLink='border border-primary bg-primary p-2 rounded-lg mx-auto justify-center'>
          <span className='mx-auto w-full text-bg font-bold'>Register</span>
        </LinkNav>
      </div>
    </nav>
  )
}

export default SlideNav
