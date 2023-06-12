import { type ReactNode } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import { MDEditor } from '@components/icons'

export interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = (props: AuthLayoutProps): JSX.Element => {
  const { children } = props
  const { userRepository } = compositionRootUser()
  
  const user = userRepository.getCurrentUser()
  
  console.log('user app', user)
  
  // if(user !== null) return redirect('/dashboard/');

  return (
    <div className='p-4 h-full'>
      <Link href={'/'}>
        <MDEditor className='h-8 hover:scale-105' color='' />
      </Link>
      {children}
    </div>
  )
}


export default AuthLayout