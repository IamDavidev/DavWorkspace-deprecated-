'use client'

import { UserClientRepository } from '@lib/repositories/UserClient.repository'

export const SignOutBtn = (): JSX.Element => {
  return (
    <button
      onClick={() => {
        UserClientRepository.signOut().catch(() => {})
      }}>
      <span>Logout</span>
    </button>
  )
}
