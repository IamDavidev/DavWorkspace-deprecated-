import Link from 'next/link'
import { redirect } from 'next/navigation'

import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'

export const metadata = {
  title: 'Home | DavWorkspace',
  description: 'Home page'
}

const Home = async (): Promise<JSX.Element> => {
  const { userProxyAdapter } = compositionRootUser()
  const user = await userProxyAdapter.getCurrentUser()

  console.log('user app', user)

  if (user !== null) redirect('/dashboard/')

  return (
    <section className='p-4 flex flex-row gap-6 h-full w-full justify-center items-center '>
      <Link href={'/auth/login/'}
            className='bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500'
      >
        Login
      </Link>
      <Link href={'/dashboard/'}
            className='bg-white text-dark-gray rounded-lg py-2 px-6 hover:bg-dark-gray hover:text-white transition-all hover:duration-500'
      >
        Dashboard
      </Link>
    </section>
  )
}

export default Home
