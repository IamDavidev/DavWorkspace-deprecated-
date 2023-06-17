import { type FC } from 'react'
import Link from 'next/link'

import { MDEditor } from '@components/icons'
import { PreviewEditorImg } from '@components/landing/PreviewEditorImg'

export const NavbarLanding: FC = () => {
  return (
    <nav className={'w-full py-4 flex flex-row justify-around'}>
      <Link href={'/'} className={'flex flex-row gap-4 items-center'}>
        <MDEditor className='h-8 hover:scale-105' color='' />
        <span className={'font-bold text-white'}>
              DavWorkspace
          </span>
      </Link>
      <Link href={'/editor/md'}>
        Playground
      </Link>
      <div className={'flex flex-row gap-4 items-center'}>
        <Link href={'/auth/login/'}>
          Login
        </Link>
        <Link href={'/auth/signup/'}
              className={'bg-white px-8 py-2 rounded-lg text-dark hover:bg-dark-gray hover:text-white transition-all hover:duration-500 '}
        >
          Signup
        </Link>
      </div>
    </nav>
  )
}

export const MaskGroupImg: FC = () => {
  return (
    <img src={'/MaskGroup.png'} alt={'mask group'}
         className={'w-full h-full absolute left-0 top-0 object-cover opacity-20 z-30'} />
  )
}

export const TitleLanding: FC = () => {
  return (
    <div className={'w-full h-full flex flex-col justify-center items-center gap-8 py-36'}>
      <h1 className='text-8xl text-center font-bold'>
        Markdown <span
        className={'text-clip text-transparent bg-clip-text bg-gradient-to-br from-light-violet to-white'}
      >Editor</span>
        <span className={'block'}></span>
        Made Simple
      </h1>
      <div className={'text-center text-white opacity-80 text-xl'}>
        <p>
          Produce beautiful documents starting from a simple markdown
        </p>
        <p>
          and share it with your friends with a simple link
        </p>
      </div>
    </div>
  )
}


export const MainLadingView: FC = () => {
  return (
    <>
      <div className={'w-full relative'}>
        <div className={'w-full h-full flex flex-col gap-4 relative z-50'}>
          <NavbarLanding />
          <TitleLanding />
        </div>
        <MaskGroupImg />
      </div>
      <PreviewEditorImg />
    </>
  )
}