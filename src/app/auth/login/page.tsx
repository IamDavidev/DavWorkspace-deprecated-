import { type FC } from 'react'
import Link from 'next/link'

import { ButtonSignUpGithub } from '@components/common/ButtonSignUpGithub.component'
import { ButtonSignUpGoogle } from '@components/common/buttonSignUpGoogle.component'

import { FormSignUserEmail } from './components/FormSignUpUserEamil.component'

export const metadata = {
  title: 'Login | DavWorkspace',
  description: 'Login page for DavWorkspace.'
}

const SignUpUserPage: FC = () => {
  return (
    <div className='h-full relative px-4'>
      <div className={'flex justify-center items-center flex-col  w-full h-full bg-transparent relative z-50'}>
        <header className=''>
          <h1 className='mb-12 text-7xl text-light-violet font-bold'>
            Login
          </h1>
        </header>
        <section className='flex gap-8 items-center'>
          <ButtonSignUpGithub />
          <ButtonSignUpGoogle />
        </section>
        <span className='my-8 w-[480px] h-[1px] bg-white opacity-60' />
        <section className='flex flex-col gap-[32px]'>
          <FormSignUserEmail />
        </section>
        <Link href='/'
              className='text-light-violet text-sm mt-8'
        >
          Back to home
        </Link>
      </div>
      <img src={'/bg.png'} alt='blob background' className={'absolute w-full h-full top-0 left-0 z-30'} />
    </div>
  )
}

export default SignUpUserPage
