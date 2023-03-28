import { redirect } from 'next/navigation'

import { NotebooksServerRepository } from '@lib/repositories/NotebooksServer.repository'
import { UserServerRepository } from '@lib/repositories/UserServer.repository'
import { Navbar } from './components/Navbar.component'

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

  const { notebooks } = await NotebooksServerRepository.getNotebooksByOwnerId(
    ownerId
  )
  console.info(
    '🚀 ~>  file: page.tsx:23 ~>  NotebooksPage ~>  notebooks:',
    notebooks
  )

  return (
    <>
      <Navbar />
      <section>
        {notebooks?.length > 0 &&
          notebooks.map(notebook => {
            return (
              <span key={notebook.id}>
                <h1>{notebook.title}</h1>
              </span>
            )
          })}
      </section>
    </>
  )
}

export default NotebooksPage
