'use client'
import { type  FC } from 'react'
import { useRouter } from 'next/navigation'
import { type  AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

import { COLORS } from '@constants/colors.const'
import { compositionRootUserAuth } from '@lib/modules/user/main/compositionRootUserAuth'
import { compositionRootLogger } from '@lib/modules/logger/root'
import { LogOutIcon } from '@components/icons'


export async function logoutAction(router: AppRouterInstance): Promise<void> {
  const { userAuthProxy } = compositionRootUserAuth()

  await userAuthProxy.signOut()

  router.push('/login')
}

export const ButtonLogout: FC = () => {
  const router = useRouter()
  const { logger } = compositionRootLogger()

  return (
    <button
      className='px-6 py-1 bg-white text-dark-gray  rounded-lg flex flex-row gap-2 opacity-80 hover:opacity-100 justify-center items-center'
      onClick={() => {
        logoutAction(router).catch(() => {
          logger.error('Logout error')
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