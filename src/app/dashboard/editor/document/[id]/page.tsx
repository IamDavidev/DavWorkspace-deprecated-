import { DocumentsServerRespository } from '@lib/repositories/DocumentsServer.repository'
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

  const data = await DocumentsServerRespository.getDocumentById(docId)

  console.info('🚀 ~>  file: page.tsx:21 ~>  document:', data)

  return (
    <>
      <div className='w-full h-full flex flex-row py-8 rounded-2xl gap-4 overflow-hidden'>
        <ContainerEditor initialValue='' />
      </div>
    </>
  )
}

export default EditNotePage
