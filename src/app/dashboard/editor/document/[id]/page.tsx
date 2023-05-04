import { compositionRootDocument } from "@lib/modules/documents/main/compositionRootDocuments"
import { ContainerEditor } from "./components/EditorContainer.component"

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

  return (
    <>
      <div className='w-full h-full flex flex-row py-8 rounded-2xl gap-4 overflow-hidden'>
        <ContainerEditor value={document?.current_content ?? ""} />
      </div>
    </>
  )
}

export default EditNotePage
