import { ButtonSignUpGithub } from '@components/common/ButtonSignUpGithub.component'
import { ButtonSignUpGoogle } from '@components/common/buttonSignUpGoogle.component'

import { FormSignUserEmail } from './components/FormSignUpUserEamil.component'

export const metadata = {
  title: 'Login | DavWorkspace',
  description: 'Login page for DavWorkspace.'
}

const SignUpUserPage = (): JSX.Element => {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <header>
        <h1 className='mb-12 text-7xl text-light-violet font-bold'>
          # Login
        </h1>
      </header>
      <section className='flex gap-4 '>
        <ButtonSignUpGithub />
        <ButtonSignUpGoogle />
      </section>
      <span className='my-8 w-[480px] h-[1px] bg-white opacity-60' />
      <section className='flex flex-col gap-[32px]'>
        <h2 className='text-3xl font-medium'>
          Continue with {' '}
          <span className='text-light-violet font-bold'>
            **email**
          </span>
        </h2>
        <FormSignUserEmail />
      </section>
    </div>
  )
}

export default SignUpUserPage
