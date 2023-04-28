import { DocumentsServerRespository } from '@lib/repositories/DocumentsServer.repository'
import Link from 'next/link'

export const metadata = {
  title: 'Notebook | DavWorkspace',
  description: 'Notebook'
}

interface IPropsNotebookIdPage {
  params: {
    id: string
  }
  searchParams?: Record<string, string | string[] | undefined>
}
const NotebookIdPage = async ({
  params
}: IPropsNotebookIdPage): Promise<JSX.Element> => {
  const notebookId = params.id

  const { documents } =
    await DocumentsServerRespository.getAllDocumentsByNotebookId(notebookId, '')

  console.info("🚀 ~>  file: page.tsx:21 ~>  documents:", documents)
  return (
    <div className='p-12'>
      <h1 className='my-4'>Notebook : {notebookId}</h1>
      <section className='flex flex-wrap gap-4'>
        {documents.map(
          ({ title, id }: { id: string; title: string }): JSX.Element => {
            return (
              <Link
                key={id}
                href={`/dashboard/editor/document/${id}`}
                className='bg-transparent border-solid border-white text-white border px-16 py-2 w-auto rounded-xl maxw-[320px]'>
                <span>{title}</span>
              </Link>
            )
          }
        )}
      </section>
    </div>
  )
}

export default NotebookIdPage
