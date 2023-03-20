import Head from '@components/Head.component'
import { type FC } from 'react'
export interface IPropsPageLayout {
  children: React.ReactNode
  title: string
  description: string
  keywords?: string
  className: string
}

export const PageLayout: FC<IPropsPageLayout> = ({
  children,
  title,
  description,
  keywords,
  className
}): JSX.Element => {
  return (
    <>
      <Head title={title} description={description} />
      <section className={`w-full h-full p-8  ${className ?? ''} `}>
        {children}
      </section>
    </>
  )
}

export default PageLayout
