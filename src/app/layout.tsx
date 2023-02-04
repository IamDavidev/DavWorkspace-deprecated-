import { type ReactNode } from 'react'
import '../styles/global.css'
import Link from 'next/link'

export default function RootLayout ({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
    <body>
    <nav className={'flex gap-4 flex-row text-primary '}>
      <Link href={'/editor'}>
        Editor
      </Link>
      <Link href={'/'}>
        Home
      </Link>
    </nav>
    {children}
    </body>
    </html>
  )
}
