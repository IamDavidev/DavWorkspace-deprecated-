'use client'
import { COLORS } from '@constants/colors.const'
// import { UserClientRepository } from '@lib/repositories/UserClient.repository'
import { GithubIcon } from '../icons/Github.icon'

export const ButtonSignUpGithub = (): JSX.Element => {
  return (
    <>
      <div className='my-4'>
        <div className='flex justify-center items-center flex-col'>
          <button
            className='flex gap-4 bg-white justify-center items-center border border-white border-solid px-16 py-4 rounded-2xl text-black  transition duration-300 ease-in-out    hover:border-light-violet hover:bg-transparent hover:text-light-violet [&>svg>path]:hover:stroke-light-violet [&>svg>path]:hover:transition  [&>svg>path]:hover:duration-300 [&>svg>path]:hover:ease-in-out'
          // onClick={() => {
          // UserClientRepository.signInWithGithub().catch(() => { })
          // }}
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
