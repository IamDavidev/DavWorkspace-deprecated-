import { type ReactNode } from 'react'

import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'

export interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = (props: AuthLayoutProps): JSX.Element => {
  const { children } = props
  const { userProxyAdapter } = compositionRootUser()

  const user = userProxyAdapter.getCurrentUser()

  console.log('USER APP AUTH ', user)

  return (
    <div className='h-full'>
      {children}
    </div>
  )
}


export default AuthLayout