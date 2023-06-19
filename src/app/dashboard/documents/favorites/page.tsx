import { redirect } from 'next/navigation'

import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { ExpandIcon } from '@components/icons/Expand.icon'
import { COLORS } from '@constants/colors.const'

const FavoritesPage = async (): Promise<JSX.Element> => {
  const { documentProxyAdapter } = compositionRootDocument()
  const { userProxyAdapter } = compositionRootUser()

  const user = await userProxyAdapter.getCurrentUser()

  if (user === null) redirect('/dashboard')

  const documents = await documentProxyAdapter.getAllDocumentsByOwnerId(user.id)


  const favoritesDocuments = (documents !== null)
    ? documents.filter(document => document.isFavorite)
    : []

  return (
    <div
      className={'flex flex-col w-full h-full gap-4 p-16'}
    >
      <h1
        className={'text-4xl font-bold w-full text-end'}
      >Favorites</h1>
      <div className={'flex flex-row gap-4 justify-center items-stretch'}>
        {favoritesDocuments.map((doc) => {
          return (
            <article key={doc.id} className={'p-4 border border-solid border-white rounded-2xl flex flex-col gap-2'}>
              <header className={'w-full flex flex-row justify-between'}>
                <span className={'text-white opacity-80 '}>Academy</span>
                <a href={`/dashboard/documents/${doc.id}`}>
                  <ExpandIcon className={'w-6 h-6 text-white opacity-80'} strokeColor={COLORS.WHITE} />
                </a>
              </header>
              <div>
                <h2 className={'text-2xl'}> {doc.title} </h2>
              </div>
              <footer className={'flex flex-row gap-2 pt-2'}>
                {doc.tags.length > 0 ? doc.tags.map(tag => {
                  return (
                    <div key={tag} className={'border border-light-violet border-solid px-8 py-1 rounded-full'}>
                      <span className={'text-light-violet'}>{tag}</span>
                    </div>
                  )
                }) : <span
                  className={'text-white border-white border-solid border rounded-full opacity-80 px-8 p-1'}>no tags</span>}
              </footer>
            </article>
          )
        })}
      </div>
    </div>
  )
}


export default FavoritesPage
