import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import { type ReactNode } from 'react'
import { DocumentItem } from './components/DocumentItem.component'


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
    <div className='flex flex-row gap-4 h-full'>
      <section className=' min-w-[400px] max-w-[400px] border border-r border-t-0 border-l-0 border-b-0 border-white  '>
        <header className="h-[72px] px-4">
          search input
        </header>
        <div className='py-8 px-4 flex flex-col gap-8'>
          {documents?.map(DocumentItem)}
        </div>
      </section>
      {children}
    </div>
  )
}

export default LayoutDashboardDocuments
