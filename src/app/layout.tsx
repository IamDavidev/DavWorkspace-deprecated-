import { Inter } from '@next/font/google'
import { type ReactNode } from 'react'

import '../styles/editor.styles.css'
import '../styles/global.css'

import { ContainerToaster } from '@components/common/ContainerToaster.component'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout(props: RootLayoutProps): Promise<JSX.Element> {
  const { children } = props

  return (
    <html lang='en'>
    <body className={
      ' app-editor  flex  flex-row gap-0 min-h-screen text-white bg-dark ' +
      inter.className
    }>
    <main className='w-full h-auto mx-auto'>
      {children}
    </main>
    <ContainerToaster />
    </body>
    </html>
  )
}
