import { redirect } from 'next/navigation'
import Link from 'next/link'

import { NotebooksServerRepository } from '@lib/repositories/NotebooksServer.repository'
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

  const { notebooks } = await NotebooksServerRepository.getNotebooksByOwnerId(
    ownerId
  )

  return (
    <>
      <NavbarNotebooks />
      <section className='flex flex-wrap gap-6 '>
        {notebooks?.length > 0 &&
          notebooks.map(notebook => {
            return (
              <Link
                href={`/notebooks/${notebook.id as string}`}
                key={notebook.id}
                className='bg-transparent border-solid border-white text-white border px-16 py-2 w-auto rounded-xl maxw-[320px]'>
                <span className='text-2xl font-bold text-primary my-4'>
                  {notebook.title}
                </span>
                <p>
                  {notebook.description.length > 100 ? (
                    <span>{notebook.description.slice(0, 100)}...</span>
                  ) : (
                    <span>{notebook.description}</span>
                  )}
                </p>
              </Link>
            )
          })}
      </section>
    </>
  )
}

export default NotebooksPage
