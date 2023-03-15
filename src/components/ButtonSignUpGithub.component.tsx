'use client'
import { COLORS } from '@constants/colors.const'
import { useUser } from '@lib/hooks/useUser.hook'
import { GithubIcon } from './icons/Github.icon'

const ButtonSignUpGithub = (): JSX.Element => {
  const { signInWithGithub } = useUser()

  return (
    <>
      <div className='my-4'>
        <div className='flex justify-center items-center flex-col'>
          <button
            className='flex gap-2 items-center justify-center border border-white border-solid px-8 py-3 rounded-md text-white  transition duration-300 ease-in-out hover:border-bg hover:text-bg hover:bg-white [&>svg>path]:hover:stroke-bg [&>svg>path]:hover:transition  [&>svg>path]:hover:duration-300 [&>svg>path]:hover:ease-in-out'
            onClick={() => {
              signInWithGithub().catch(() => {})
            }}>
            <GithubIcon className='h-6 w-6' color={COLORS.LINK} />
            Login with Github
          </button>
        </div>
      </div>
    </>
  )
}

export default ButtonSignUpGithub
