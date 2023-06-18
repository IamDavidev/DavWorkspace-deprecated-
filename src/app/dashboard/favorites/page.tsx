import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { redirect } from 'next/navigation'


const FavoritesPage = async (): Promise<JSX.Element> => {
  const { documentProxyAdapter } = compositionRootDocument()
  const { userProxyAdapter } = compositionRootUser()

  const user = await userProxyAdapter.getCurrentUser()

  if (user === null) redirect('/dashboard')

  const documents = await documentProxyAdapter.getAllDocumentsByOwnerId(user.id)


  const favoritesDocuments = (documents !== null)
    ? documents.filter(document => document.isFavorite)
    : []


  console.log(favoritesDocuments)

  return (
    <div
      className={'flex flex-col justify-center items-center w-full h-full '}
    >
      <h1
        className={'text-4xl font-bold '}
      >Favorites</h1>
    </div>
  )
}


export default FavoritesPage
