import { type ReactNode } from 'react'
import '../styles/global.css'
import '../styles/editor.styles.css'

import SlideNav from '@/components/SlideNav.component'
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
            ' text-white bg-secondary  min-h-screen ' + inter.className
          }>
          <div className='app-editor  flex  flex-row gap-8'>
            <header className='max-w-[10%]'>
              <SlideNav />
            </header>
            <main className='w-full'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
