import { redirect } from 'next/navigation'

import { UserServerRepository } from '@lib/repositories/UserServer.repository'
import { NavbarNotebooks } from './components/NavbarNotebooks.component'

export const metadata = {
  title: 'Notebooks | DavWorkspace',
  description: 'Notebooks'
}

const NotebooksPage = async (): Promise<JSX.Element> => {
  const { user } = await UserServerRepository.getUserServer()

  if (user == null) {
    redirect('/')
  }

  const ownerId = user.id

  console.log(ownerId)

  return (
    <>
      <NavbarNotebooks />
      <section className='flex flex-wrap gap-6 '></section>
    </>
  )
}

export default NotebooksPage
