'use client'

import { COLORS } from '@constants/colors.const'
import { compositionRootUserAuth } from '@lib/modules/user/main/compositionRootUserAuth'
import { compositionRootLogger } from '@lib/modules/logger/root'
import { LogOutIcon } from '@components/icons'

export const ButtonLogout = (): JSX.Element => {
  const { logger } = compositionRootLogger()
  const { userAuthProxy } = compositionRootUserAuth()

  return (
    <button
      className='px-6 py-1 bg-white text-dark-gray  rounded-lg flex flex-row gap-2 opacity-80 hover:opacity-100 justify-center items-center'
      onClick={() => {
        userAuthProxy.signOut().catch(() => {
          logger.error('Error with sign out')
        })
      }}
    >
      <LogOutIcon className='h-4 w-4' color={COLORS.DARK_GRAY} />
      <span className='text-xs'>
        Logout
      </span>
    </button>
  )
}