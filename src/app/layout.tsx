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
        <div className={' text-white bg-secondary ' + inter.className}>
          <div className='app-editor  flex  flex-row gap-8 min-h-screen'>
            <header className='max-w-[10%]'>
              <SlideNav />
            </header>
            <main className='w-full max-w-[90%] h-full'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
