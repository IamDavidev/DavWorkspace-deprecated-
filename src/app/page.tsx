import { type NextPage } from 'next'

import Link from 'next/link'

import PageLayout from '@/components/PageLayout.component'

const Home: NextPage = (): JSX.Element => {
  return (
    <PageLayout title='davworkspace'>
      <h1>Dav WorkSpace</h1>
      <span>MarkDown Editor</span>
      <Link href={'/editor'}>Go to Editor</Link>
    </PageLayout>
  )
}

export default Home
