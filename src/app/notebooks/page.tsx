import { redirect } from 'next/navigation'

import { useNotebooks } from '@lib/hooks/useNotebooks.hook'
import { UserServerRepository } from '@lib/repositories/UserServer.repository'
import { NavbarNotebooks } from './components/NavbarNotebooks.component'
import { type INotebook } from '@lib/models/Notebook.interface'

export const metadata = {
  title: 'Notebooks | DavWorkspace',
  description: 'Notebooks'
}

const NotebooksPage = async (): Promise<JSX.Element> => {
  const { getNotebooksByOwnerIdServer } = useNotebooks()
  const { user } = await UserServerRepository.getUserServer()

  if (user == null) {
    redirect('/')
  }

  const ownerId = user.id

  const response = await getNotebooksByOwnerIdServer({
    ownerId
  })
  const notebooks = response.notebooks as INotebook[]
  return (
    <>
      <NavbarNotebooks />
      <section className='flex flex-wrap gap-6 '>
        {notebooks.map(({ id, title }: INotebook): JSX.Element => {
          return <span key={id}>{title}</span>
        })}
      </section>
    </>
  )
}

export default NotebooksPage
