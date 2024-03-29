'use client'

import { useRouter } from 'next/navigation'
import { type FC, type FormEvent } from 'react'

import { ContainerCenter } from '@components/atoms/ContainerCenter.atom'
import { InputAtom, InputType } from '@components/atoms/Input.atom'
import { compositionRootLogger } from '@lib/modules/logger/root'
import { compositionRootUserAuth } from '@lib/modules/user/main/compositionRootUserAuth'

export const FormSignUserEmail: FC = () => {
  const { logger } = compositionRootLogger()
  const { userAuthProxy } = compositionRootUserAuth()

  const router = useRouter()

  const onSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const { email, password } = e.target as HTMLFormElement

    if (email.value.length < 1) {
      logger.error('Please enter your email')
      return
    }

    if (password.value.length < 1) {
      logger.error('Please enter your password')
      return
    }

    await userAuthProxy.signInWithEmailAndPassword(email.value, password.value).then(() => {
      logger.success('You have successfully signed in!')
      router.push('/dashboard/')
    }).catch(() => {
      logger.error('Error with sign in')
    })

  }

  return (
    <>
      <ContainerCenter direction='column'>
        <form
          className='flex flex-col gap-4'
          onSubmit={(e): void => {
            onSubmitHandler(e).catch(() => {
            })
          }}>
          <InputAtom
            id='email'
            label={' ` Email ` '}
            placeholder='email@email.com'
            type={InputType.email}
            classInput='px-3 py-2 border border-white border-solid bg-transparent rounded-lg min-w-[320px]'
            classLabel='flex flex-col gap-2  justify-center items-start '
            classLabelText='text-white font-bold bg-dark-gray rounded-lg px-2 py-1 w-auto'
          />
          <InputAtom
            id='password'
            classLabel='flex flex-col gap-2  justify-center items-start'
            classLabelText='text-white font-bold bg-dark-gray rounded-lg px-2 py-1 w-auto'
            label={'` Password `'}
            placeholder='********'
            type={InputType.password}
            classInput='px-3 py-2 border border-white border-solid bg-transparent rounded-lg min-w-[320px]'
          />{' '}
          <label className='flex justify-end'>
            <button
              type='submit'
              className='bg-transparent border border-solid text-light-violet border-light-violet px-16 py-2 font-bold rounded-xl transition hover:duration-500 ease-in-out hover:bg-light-violet hover:text-black'
            >
              Login
            </button>
          </label>
        </form>
      </ContainerCenter>
    </>
  )
}
