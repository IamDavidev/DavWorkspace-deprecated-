import { type ReactNode } from 'react'
import '../styles/editor.styles.css'
import '../styles/global.css'

import SlideNav from '@/components/SlideNav.component'
import { ContainerToaster } from '@components/common/ContainerToaster.component'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <div
          className={
            ' app-editor  flex  flex-row gap-4 min-h-screen text-white bg-bg ' +
            inter.className
          }>
          <header className='max-w-[10%] w-[10%] min-w-[160px]'>
            <SlideNav />
          </header>
          <main className='w-full max-w-[85%]  h-auto px-4 mx-auto'>
            {children}
          </main>
        </div>
        <ContainerToaster />
      </body>
    </html>
  )
}
