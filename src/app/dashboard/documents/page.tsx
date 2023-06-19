import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { redirect } from 'next/navigation'


const DocumentsPage = async (): Promise<JSX.Element> => {
  const { userProxyAdapter } = compositionRootUser()
  const { documentProxyAdapter } = compositionRootDocument()

  const user = await userProxyAdapter.getCurrentUser()

  if (user === null) return redirect('/auth/login')

  const documents = await documentProxyAdapter.getAllDocumentsByOwnerId(user.id)

  if (documents !== null) redirect(`/dashboard/documents/${documents[0].id}`)

  return (
    <span>
      Documents Page 
    </span>
  )
}

export default DocumentsPage
