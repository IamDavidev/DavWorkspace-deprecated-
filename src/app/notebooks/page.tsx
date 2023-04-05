import { redirect } from 'next/navigation'

import { UserServerRepository } from '@lib/repositories/UserServer.repository'
import { NavbarNotebooks } from './components/NavbarNotebooks.component'
import { apiGetNotebooksByOwnerIdServer } from '@lib/api/getNotebookByOwnerIdServer.api'
import { type INotebook } from '@lib/models/Notebook.interface'

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

  const { notebooks } = await apiGetNotebooksByOwnerIdServer(ownerId)

  return (
    <>
      <NavbarNotebooks />
      <section className='flex flex-wrap gap-6 '>
        {notebooks.length > 0 &&
          notebooks.map(({ title, id }: INotebook) => {
            return (
              <span
                className=' bg-transparent rounded-md shadow-md flex items-center justify-center text-xl  border border-white px-8 py-2'
                key={id}>
                {title}
              </span>
            )
          })}
      </section>
    </>
  )
}

export default NotebooksPage
