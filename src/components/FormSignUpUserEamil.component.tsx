'use client'

import { useUser } from '@lib/hooks/useUser.hook'

export const FormSignUserEmail = (): JSX.Element => {
  const { signUpWithEmail } = useUser()

  const onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = form.username.value
    console.log(email)
    const password = form.password.value
    console.log(password)
    await signUpWithEmail(email, password)
  }

  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <form
          className='flex flex-col gap-4'
          onSubmit={(e): void => {
            onSubmitHandler(e).catch(() => {})
          }}>
          <label htmlFor='username' className='flex flex-col gap-2'>
            <span className='text-white'>Email</span>
            <input
              placeholder='John Doe ...'
              id='username'
              type='email'
              className='px-3 py-1 border border-white border-solid bg-transparent rounded-lg'
            />
          </label>
          <label htmlFor='password' className='flex flex-col gap-2'>
            <span className='text-white'>Password</span>
            <input
              id='password'
              placeholder='********'
              type='password'
              className='px-2 py-1 border border-white border-solid bg-transparent rounded-lg'
            />
          </label>
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
