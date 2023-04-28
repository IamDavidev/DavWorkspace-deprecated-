import { type ReactNode } from 'react'
import '../styles/editor.styles.css'
import '../styles/global.css'

import SlideNav from '@/components/SlideNav.component'
import { ContainerToaster } from '@components/common/ContainerToaster.component'
import { Inter } from '@next/font/google'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children
}: {
  children: ReactNode
}): Promise<JSX.Element> {
  const { userRepository } = compositionRootUser()
  const user = await userRepository.getCurrentUser()
  console.info("🚀 ~>  file: layout.tsx:19 ~>  user:", user)

  return (
    <html lang='en'>
      <body>
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
      </body>
    </html>
  )
}
