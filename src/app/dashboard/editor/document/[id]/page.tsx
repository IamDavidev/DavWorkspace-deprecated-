import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { ContainerEditor } from './components/EditorContainer.component'

export interface IPropsEditNotePage {
  params: {
    id: string
  }
}

export const metadata = {
  title: 'Edit Note',
  description: 'Edit your note'
}

const EditNotePage = async (
  props: IPropsEditNotePage
): Promise<JSX.Element> => {
  const { id: docId } = props.params
  const { documentProxyAdapter } = compositionRootDocument()
  const document = await documentProxyAdapter.getDocumentById(docId)


  if (document === null) return (<div>Document not found</div>)

  // const document = {
  //   id: '1',
  //   owner_id: '1'
  // }

  return (
    <ContainerEditor
      initialValue={document.current_content}
      userId={document.owner_id}
      documentId={document?.id}
    />
  )
}



export default EditNotePage
