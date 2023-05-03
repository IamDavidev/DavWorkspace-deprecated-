import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { type DocumentEntity } from '@lib/modules/documents/main/entities/documet.entity'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import Link from 'next/link'
import { type ReactNode } from 'react'


interface LayoutDashboardDocumentsProps {
  children: ReactNode
}

const LayoutDashboardDocuments = async ({
  children
}: LayoutDashboardDocumentsProps): Promise<JSX.Element> => {
  const { documentProxyAdapter } = compositionRootDocument()
  const { userRepository } = compositionRootUser()
  const user = await userRepository.getCurrentUser()

  const ownerId = user?.id ?? ""

  const documents = await documentProxyAdapter.getAllDocumentsByOwnerId(ownerId)

  return (
    <div className='flex flex-row gap-4 flex-wrap'>
      <section>
        <header className="h-[72px] px-4">
          search input
        </header>
        <div className='py-8 px-4 flex flex-col gap-8'>
          {documents?.map((doc: DocumentEntity): JSX.Element => {
            return (
              <Link href={`/dashboard/documents/${doc.id}`} key={doc.id}>
                <article>
                  <h2>
                    {doc.title}
                  </h2>
                </article>
              </Link>
            )
          })}
        </div>
      </section>
      {children}
    </div>
  )
}

export default LayoutDashboardDocuments
