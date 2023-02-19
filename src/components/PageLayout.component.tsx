import type { FC, ReactNode } from 'react'

import { Inter } from '@next/font/google'

export interface IPropsPageLayout {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const PageLayout: FC<IPropsPageLayout> = ({ children }): JSX.Element => {
  return (
    <>
      <div
        className={
          'flex flex-col items-center text-white bg-secondary  min-h-screen ' +
          inter.className
        }>
        {children}
      </div>
    </>
  )
}

export default PageLayout
