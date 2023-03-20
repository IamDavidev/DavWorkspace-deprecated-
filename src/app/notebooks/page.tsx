import { PageWithAuthLayout } from '@/layouts/PageWithAuth.layout'
import { type FC } from 'react'

const NotebooksPage: FC = (): JSX.Element => {
  return (
    <PageWithAuthLayout
      className='flex justify-center items-center flex-col'
      title='Notebooks'
      description='Notebooks'>
      Notebooks Page
    </PageWithAuthLayout>
  )
}

export default NotebooksPage
