'use client'

import { InputAtom, InputType } from '@components/atoms/Input.atom'
import { UserRepository } from '@lib/repositories/User.repository'
import { useRouter } from 'next/navigation'
import { type FormEvent } from 'react'

export const FormSignUserEmail = (): JSX.Element => {
  const router = useRouter()

  const onSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = form.username.value
    const password = form.password.value
    UserRepository.signUpWithEmailAndPassword(email, password)
      .then(() => {
        router.push('/sign-in')
      })
      .catch(() => {})
  }

  return (
    <>
      <div className='flex justify-center items-center flex-col'>
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
      </div>
    </>
  )
}
