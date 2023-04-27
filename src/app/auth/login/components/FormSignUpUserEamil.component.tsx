'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent } from 'react'
import { toast } from 'sonner'

import { ContainerCenter } from '@components/atoms/ContainerCenter.atom'
import { InputAtom, InputType } from '@components/atoms/Input.atom'
import { compositionRootLogger } from '@lib/modules/logger/root'
import { compositionRootUserAuth } from '@lib/modules/user/root'

export const FormSignUserEmail = (): JSX.Element => {
  const { logger } = compositionRootLogger()
  const { userAuthRepository } = compositionRootUserAuth()
  const router = useRouter()

  const onSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const { email, password } = e.target as HTMLFormElement

    if (email.value.length < 1) { logger.error('Please enter your email'); return; }
    if (password.value.length < 1) { logger.error('Please enter your password'); return; }
    userAuthRepository.signInWithEmailAndPassword(email.value, password.value).then(() => {
      toast.success('You have successfully signed in!', {
        description: 'Redirecting to home page...'
      })
      router.push('/user/sign-in')
    }).catch(() => { logger.error('Error with sign in'); })
  }

  return (
    <>
      <ContainerCenter direction='column'>
        <form
          className='flex flex-col gap-4'
          onSubmit={(e): void => {
            onSubmitHandler(e).catch(() => { })
          }}>
          <InputAtom
            id='email'
            label={'` Email `'}
            placeholder='email@email.com'
            type={InputType.email}
            classInput='px-3 py-1 border border-white border-solid bg-transparent rounded-lg'
            classLabel='flex flex-col gap-2  justify-center items-start'
            classLabelText='text-white font-bold bg-dark-gray rounded-lg px-2 py-1 w-auto'
          />
          <InputAtom
            id='password'
            classLabel='flex flex-col gap-2  justify-center items-start'
            classLabelText='text-white font-bold bg-dark-gray rounded-lg px-2 py-1 w-auto'
            label={'` Password `'}
            placeholder='********'
            type={InputType.password}
            classInput='px-2 py-1 border border-white border-solid bg-transparent rounded-lg'
          />{' '}
          <label className='flex justify-end'>
            <button
              type='submit' className='flex gap-4 bg-white justify-center items-center border border-white border-solid px-16 py-2 rounded-2xl text-black  transition duration-300 ease-in-out    hover:border-light-violet hover:bg-transparent hover:text-light-violet'
            >
              Login
            </button>
          </label>
        </form>
      </ContainerCenter>
    </>
  )
}
