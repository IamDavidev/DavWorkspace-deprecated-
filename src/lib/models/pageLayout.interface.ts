import { type ReactNode } from 'react'

export interface IPropsPageLayout {
  children: ReactNode
  title: string
  description: string
  keywords?: string
  className: string
}
