import { type ReactNode } from 'react'
import Link from 'next/link'

import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { MDEditor } from '@components/icons'

export interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = (props: AuthLayoutProps): JSX.Element => {
  const { children } = props
  const { userProxyAdapter } = compositionRootUser()

  // const user = userProxyAdapter.getCurrentUser()
  //
  // if (user) {
  //   return (
  //     <div className='p-4 h-full'>
  //       <Link href={'/'}>
  //         <MDEditor className='h-8 hover:scale-105' color='' />
  //       </Link>
  //       {children}
  //     </div>
  //   )
  // }

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