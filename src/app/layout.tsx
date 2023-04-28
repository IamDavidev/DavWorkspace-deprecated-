import { type ReactNode } from 'react'
import '../styles/editor.styles.css'
import '../styles/global.css'

import SlideNav from '@/components/SlideNav.component'
import { ContainerToaster } from '@components/common/ContainerToaster.component'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import { Inter } from '@next/font/google'
import UserProvider from '@lib/modules/user/UserProviderComponent'

const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({
  children
}: {
  children: ReactNode
}): Promise<JSX.Element> {
  const { userRepository } = compositionRootUser()
  const user = await userRepository.getCurrentUser()

  return (
    <html lang='en'>
      <body>
        <UserProvider>
          <div
            className={
              ' app-editor  flex  flex-row gap-4 min-h-screen text-white bg-dark ' +
              inter.className
            }>
            {
              user !== null && (
                <header className='max-w-[250px] w-[250px]'>
                  <SlideNav />
                </header>
              )
            }
            <main className='w-full h-auto mx-auto'>
              {children}
            </main>
          </div>
          <ContainerToaster />
        </UserProvider>
      </body>
    </html>
  )
}
