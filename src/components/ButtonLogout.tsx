'use client'

import { COLORS } from "@constants/colors.const"
import { compositionRootUserAuth } from "@lib/modules/user/compositionRootUserAuth"
import { LogOutIcon } from "./icons/LogOut.icon"
// import { LogoutIcon } from "./icons/Logout.icon"

export const ButtonLogout = (): JSX.Element => {
  const { userAuthRepository } = compositionRootUserAuth()

  return (
    <button
      className="px-6 py-1 bg-white text-dark-gray  rounded-lg flex flex-row gap-2 opacity-80 hover:opacity-100 justify-center items-center"
      onClick={() => {
        userAuthRepository.signOut().catch(() => {
          console.error('Error on sign out')
        })
      }}
    >
      <LogOutIcon className="h-4 w-4" color={COLORS.DARK_GRAY} />
      <span className="text-xs">
        Logout
      </span>
    </button>
  )
}