import { Inter } from '@next/font/google'
import { type ReactNode } from 'react'

import '../styles/editor.styles.css'
import '../styles/global.css'

import SlideNav from '@/components/SlideNav.component'
import { ContainerToaster } from '@components/common/ContainerToaster.component'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import UserProvider from '@lib/modules/user/UserProviderComponent'
import { redirect, } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({
  children,
}: {
  children: ReactNode
}): Promise<JSX.Element> {

  const { userRepository } = compositionRootUser()
  const user = await userRepository.getCurrentUser()

  if (user === null) {
    redirect('/')
  }

  return (
    <html lang='en'>
      <body>
        <UserProvider>
          <div
            className={
              ' app-editor  flex  flex-row gap-0 min-h-screen text-white bg-dark ' +
              inter.className
            }>
            {
              user !== null && (
                <section className='max-w-[250px] w-[250px]'>
                  <SlideNav imageSrc={user.avatar_url ?? ""} name={user.nickname} email={user.email ?? ""} />
                </section>
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
