import { type ReactNode } from 'react'
import '../styles/global.css'

export default function RootLayout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return <html lang='en'>{children}</html>
}
