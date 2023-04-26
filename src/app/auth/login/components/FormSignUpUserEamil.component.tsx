'use client'

import { ContainerCenter } from '@components/atoms/ContainerCenter.atom'
import { InputAtom, InputType } from '@components/atoms/Input.atom'
import { stylesToaster } from '@lib/constants/toasterStyles.const'
import { UserClientRepository } from '@lib/repositories/UserClient.repository'
import { useRouter } from 'next/navigation'
import { type FormEvent } from 'react'
import { toast } from 'sonner'

export const FormSignUserEmail = (): JSX.Element => {
  const router = useRouter()

  const onSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const { email, password } = e.target as HTMLFormElement

    if (email.value.length < 1) {
      toast.error('Please enter your email', {
        style: {
          ...stylesToaster.error
        }
      })
      return
    }
    console.log(email.value)
    if (password.value.length < 1) {
      console.log(password.value.length)
      toast.error('Please enter your password', {
        style: {
          ...stylesToaster.error
        }
      })
      return
    }
    toast.success('You have successfully signed up!', {
      description: 'Redirecting to sign in page...'
    })

    UserClientRepository.signUpWithEmailAndPassword(email.value, password.value)
      .then(() => {
        console.log('redirect')
        router.push('/user/sign-in')
      })
      .catch(() => { })
    console.log('Finish')
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
