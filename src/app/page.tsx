import PageLayout from '@/layouts/Page.layout'
import Link from 'next/link'
import Head from './head'

const Home = (): JSX.Element => {
  return (
    <PageLayout
      title='Home | DavWorkSpace'
      description=''
      className='flex justify-center items-center flex-col'>
      <Head title='Home | DavWorkSpace' />
      <Link href={'/dashboard/editor/123'}>Go to Editor</Link>
    </PageLayout>
  )
}

export default Home
