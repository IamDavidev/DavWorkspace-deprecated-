'use client'

import { UserClientRepository } from '@lib/repositories/UserClient.repository'

export const SignOutBtn = (): JSX.Element => {
  return (
    <button
      className='text-secondary bg-primary border border-solid border-primary  rounded-2xl p-2 w-full font-bold hover:bg-secondary hover:text-primary hover:duration-500 hover:ease-in-out hover:transition-all'
      onClick={() => {
        UserClientRepository.signOut().catch(() => {})
      }}>
      <span>Logout</span>
    </button>
  )
}
