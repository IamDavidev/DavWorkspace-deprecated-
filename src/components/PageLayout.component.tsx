import Head from 'next/head'
import type { FC, ReactNode } from 'react'

export interface IPropsPageLayout {
  title: string
  children: ReactNode
}

const PageLayout: FC<IPropsPageLayout> = ({ title, children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </>
  )
}

export default PageLayout
