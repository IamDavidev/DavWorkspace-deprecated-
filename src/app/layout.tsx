import { Inter } from '@next/font/google'
import { type ReactNode } from 'react'

import '../styles/editor.styles.css'
import '../styles/global.css'

import { ContainerToaster } from '@components/common/ContainerToaster.component'
import UserProvider from '@lib/modules/user/UserProviderComponent'

const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({
  children,
}: {
  children: ReactNode
}): Promise<JSX.Element> {
  return (
    <html lang='en'>
      <body>
        <UserProvider>
          <div
            className={
              ' app-editor  flex  flex-row gap-0 min-h-screen text-white bg-dark ' +
              inter.className
            }>
            <main className='w-full h-auto mx-auto'>
              {children}
            </main>
          </div>
          <ContainerToaster />
        </UserProvider>
      </body>
    </html >
  )
}
