import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { type ReactNode } from 'react'
import { DocumentItem } from '@/app/dashboard/documents/[id]/components/DocumentItem.component'
import { SearchIcon } from '@components/icons'
import { DocumentStatus } from '@lib/modules/documents/main/entities/documet.entity'


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
            <label htmlFor='search'
                   className='flex flex-row gap-4 items-center bg-white px-4 py-2.5 rounded-lg w-full '>
              <span className='w-6 h-6'>
                <SearchIcon color='#111111' className='h-6 w-6' />
              </span>
              <input
                id={'search'}
                className='flex-grow rounded-lg bg-transparent border-none focus:ring-0 focus:outline-none text-dark-gray'
                type='text'
                placeholder='Search'
              />
            </label>
          </form>
        </header>
        <ul className='flex flex-col gap-0 py-8'>
          {documents
            ?.filter(doc => doc.status === DocumentStatus.Active)
            .map((document) => {
              return <DocumentItem {...document} key={document.id} userId={user?.id as string} />
            })}
        </ul>
      </section>
      {children}
    </div>
  )
}

export default LayoutDashboardDocuments
