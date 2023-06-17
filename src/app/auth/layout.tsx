import { type ReactNode } from 'react'

import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { redirect } from 'next/navigation'

export interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = async (props: AuthLayoutProps): Promise<JSX.Element> => {
  const { children } = props
  const { userProxyAdapter } = compositionRootUser()

  const user = await userProxyAdapter.getCurrentUser()

  if (user !== null) {
    redirect('/dashboard')
    return <span>redirect </span>
  }

  return (
    <div className='h-full'>
      {children}
    </div>
  )
}


export default AuthLayout