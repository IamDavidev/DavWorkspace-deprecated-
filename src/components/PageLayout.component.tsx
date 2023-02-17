import Head from 'next/head'
import type { FC, ReactNode } from 'react'

import { Inter } from '@next/font/google'

export interface IPropsPageLayout {
  title: string
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const PageLayout: FC<IPropsPageLayout> = ({ title, children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <body>
        <main
          className={
            'flex flex-col items-center text-white bg-secondary  min-h-screen ' +
            inter.className
          }>
          {children}
        </main>
      </body>
    </>
  )
}

export default PageLayout
