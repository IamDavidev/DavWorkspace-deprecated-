import { LogInIcon } from '@components/icons/LogIn.icon'
import { UserPlus } from '@components/icons/UserPlus.icon'
import { COLORS } from '@constants/colors.const'
import { type FC } from 'react'
import { LinkNav } from './LInkNav.component'

export const SignInSocial: FC = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-4 w-full my-4'>
      <LinkNav
        href='/user/sign-in'
        classNameLink={
          'border border-primary bg-transparent p-2 rounded-lg mx-auto justify-center'
        }
        icon={<LogInIcon className='w-5 h-5' color={COLORS.PRIMARY} />}>
        <span className='mx-auto w-full text-primary font-bold'>Login</span>
      </LinkNav>
      <LinkNav
        href='/user/sign-up'
        icon={<UserPlus className='w-5 h-5' color={COLORS.BG} />}
        classNameLink='border border-primary bg-primary p-2 rounded-lg mx-auto justify-center'>
        <span className='mx-auto w-full text-bg font-bold'>Register</span>
      </LinkNav>
    </div>
  )
}
