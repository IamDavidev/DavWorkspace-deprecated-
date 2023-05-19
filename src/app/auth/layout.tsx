import { type ReactNode } from 'react'
import { MDEditor } from "@components/icons"
import Link from 'next/link'

export interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({
  children
}: AuthLayoutProps): JSX.Element => {
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