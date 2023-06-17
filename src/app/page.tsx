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

/**
 *
 *
 *     <section className='p-4 flex flex-row gap-6 h-full w-full justify-center items-center '>
 *       <Link href={'/auth/login/'}
 *             className='bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500'
 *       >
 *         Login
 *       </Link>
 *       <Link href={'/dashboard/'}
 *             className='bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500'
 *       >
 *         Dashboard
 *       </Link>
 *       <Link href={'/editor/md/'}
 *             className='bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500'
 *       >
 *         Markdown Editor
 *       </Link>
 *     </section>
 *
 */
