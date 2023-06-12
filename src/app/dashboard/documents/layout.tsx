import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { type ReactNode } from 'react'
import { DocumentItem } from './components/DocumentItem.component'


interface LayoutDashboardDocumentsProps {
  children: ReactNode
}


const LayoutDashboardDocuments = async (props: LayoutDashboardDocumentsProps): Promise<JSX.Element> => {
  const { children } = props
  const { documentProxyAdapter } = compositionRootDocument()
  const { userProxyAdapter } = compositionRootUser()
  const user = await userProxyAdapter.getCurrentUser()

  const ownerId = user?.id ?? ''

  const documents = await documentProxyAdapter.getAllDocumentsByOwnerId(ownerId)

  return (
    <div className='flex flex-row gap-4 h-full'>
      <section className=' min-w-[400px] max-w-[400px] border border-r border-t-0 border-l-0 border-b-0 border-white  '>
        <header className='h-[72px] p-4'>
          <form className='flex flex-row gap-4'>
            <input
              className='flex-grow rounded-lg border border-white border-solid'
              type='text'
              placeholder='Search'
            />
          </form>
        </header>
        <ul className='flex flex-col gap-0'>
          {documents?.map(DocumentItem)}
        </ul>
      </section>
      {children}
    </div>
  )
}

export default LayoutDashboardDocuments
