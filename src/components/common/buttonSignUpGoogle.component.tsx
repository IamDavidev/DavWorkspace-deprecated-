'use client'

import { GoogleIcon } from '@components/icons/Google.icon'
import { COLORS } from '@constants/colors.const'
import { compositionRootLogger } from '@lib/modules/logger/root'
import { compositionRootUserAuth } from '@lib/modules/user/main/compositionRootUserAuth'

export const ButtonSignUpGoogle = (): JSX.Element => {
  const { logger } = compositionRootLogger()
  const { userAuthProxy } = compositionRootUserAuth()
  return (
    <>
      <div className='my-4'>
        <div className='flex justify-center items-center flex-col'>
          <button
            className='flex gap-4 opacity-90 bg-white justify-center items-center border border-white border-solid px-16 py-4 rounded-2xl text-black  transition duration-300 ease-in-out 
            hover:opacity-100 hover:scale-105'
            onClick={() => {
              userAuthProxy.signInWithGoogle()
                .catch(() => {
                  logger.error('Error with Google')
                })
            }}
          >
            <GoogleIcon className='h-6 w-6' color={COLORS.DARK_GRAY} />
            <span className=''>
              Google
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

