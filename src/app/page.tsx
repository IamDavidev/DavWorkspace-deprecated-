import { redirect } from 'next/navigation'
import { type Metadata } from 'next'

import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { MainLadingView } from '@components/landing/main'

export const metadata: Metadata = {
  title: 'Home | DavWorkspace',
  description: 'Home page'
}


const Home = async (): Promise<JSX.Element> => {
  const { userProxyAdapter } = compositionRootUser()
  const user = await userProxyAdapter.getCurrentUser()

  if (user !== null) redirect('/dashboard/')

  return <MainLadingView />
}

export default Home
