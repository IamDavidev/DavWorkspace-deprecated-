'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent } from 'react'
import { toast } from 'sonner'

import { ContainerCenter } from '@components/atoms/ContainerCenter.atom'
import { Divider } from '@components/atoms/Divider.atom'
import { InputAtom, InputType } from '@components/atoms/Input.atom'
import { ButtonSignUpGithub } from '@components/common/ButtonSignUpGithub.component'
import { stylesToaster } from '@lib/constants/toasterStyles.const'
import { UserClientRepository } from '@lib/repositories/UserClient.repository'

export const metadata = {
  title: 'Sign In | DavWorkspace',
  description: 'Sign In page'
}

const SignInUserPage = (): JSX.Element => {
  const router = useRouter()

  const onSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = form.email.value
    const password = form.password.value
    UserClientRepository.signInWithEmailAndPassword(email, password)
      .then((): void => {
        router.push('/dashboard')
      })
      .catch((e: Error): void => {
        toast.error(e.message, {
          style: {
            ...stylesToaster.error
          }
        })
      })
  }

  return (
    <div className='flex justify-center items-center flex-col'>
      <h2 className='mb-12'>
        <span className='text-6xl font-bold text-primary'>Sign</span>
        <span className='text-6xl font-bold  mx-2'>In</span>
      </h2>
      <ButtonSignUpGithub />
      <Divider />
      <ContainerCenter direction='column'>
        <form
          className='flex flex-col gap-4'
          onSubmit={(e): void => {
            onSubmitHandler(e).catch(() => {})
          }}>
          <InputAtom
            id='email'
            label={'Email'}
            placeholder='email@email.com'
            type={InputType.email}
            classInput='px-3 py-1 border border-white border-solid bg-transparent rounded-lg'
            classLabel='flex flex-col gap-2'
            classLabelText='text-white font-bold'
          />
          <InputAtom
            id='password'
            classLabel='flex flex-col gap-2'
            classLabelText='text-white font-bold'
            label={'Password'}
            placeholder='********'
            type={InputType.password}
            classInput='px-2 py-1 border border-white border-solid bg-transparent rounded-lg'
          />{' '}
          <label className='flex justify-end'>
            <button
              type='submit'
              className='px-4 py-1 bg-white text-black rounded-lg border border-white border-solid transition duration-300 ease-in-out hover:bg-bg hover:text-white  hover:border-white'>
              Login
            </button>
          </label>
        </form>
      </ContainerCenter>
    </div>
  )
}

export default SignInUserPage
