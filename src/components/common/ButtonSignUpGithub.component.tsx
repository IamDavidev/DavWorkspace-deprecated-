'use client'

import { type FC } from 'react'

import { COLORS } from '@constants/colors.const'
import { compositionRootLogger } from '@lib/modules/logger/root'
import { compositionRootUserAuth } from '@lib/modules/user/main/compositionRootUserAuth'
import { GithubIcon } from '@components/icons'

export const ButtonSignUpGithub: FC = () => {
  const { logger } = compositionRootLogger()
  const { userAuthProxy } = compositionRootUserAuth()

  return (
    <>
      <div className='my-4'>
        <div className='flex justify-center items-center flex-col'>
          <button
            className='flex gap-4 opacity-90 bg-white justify-center items-center border-2  border-white border-solid px-8 py-2 rounded-2xl text-black  transition duration-300 ease-in-out 
            hover:opacity-100 hover:scale-105 hover:border-light-violet'
            onClick={() => {
              userAuthProxy.signInWithGithub()
                .catch(() => {
                  logger.error('Error with Github')
                })
            }}
          >
            <GithubIcon className='h-6 w-6' color={COLORS.DARK_GRAY} />
            <span className=''>
              Github
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
