'use client'

import { compositionRootUserAuth } from "@lib/modules/user/compositionRootUserAuth"

export const ButtonLogout = (): JSX.Element => {
  const { userAuthRepository } = compositionRootUserAuth()

  return (
    <button
      onClick={() => {

        userAuthRepository.signOut().catch(() => {
          console.error('Error on sign out')
        })
      }}
    >
      Logout
    </button>
  )
}