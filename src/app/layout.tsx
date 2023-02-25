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
        <div className={' text-white bg-bg ' + inter.className}>
          <div className='app-editor  flex  flex-row gap-4 min-h-screen'>
            <header className='max-w-[10%] w-[10%] px-4 py-8'>
              <SlideNav />
            </header>
            <main className='w-full max-w-[90%]  h-full px-8'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
