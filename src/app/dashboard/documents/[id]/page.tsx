import Link from 'next/link'
import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { RenderMDtoHTML } from '@components/RederMDtoHTML'


interface DocumentRenderIdProps {
  params: {
    id: string
  }
}

export const metadata = {
  title: 'Document',
  description: 'Document'
}

const DocumentRenderId = async (props: DocumentRenderIdProps): Promise<JSX.Element> => {
  const { params } = props
  const { id: docId } = params

  const { documentProxyAdapter } = compositionRootDocument()

  const document = await documentProxyAdapter.getDocumentById(docId)

  return (
    <section className='w-full h-editor-layout overflow-y-scroll overflow-x-hidden'>
      <header className='min-h-[72px] w-full flex justify-center items-center'>
        <h1>
          {document?.title}
        </h1>
      </header>
      <div>
        <RenderMDtoHTML markdown={document?.current_content as string} />
      </div>
      <div className='p-4'>
        <Link href={`/dashboard/editor/document/${document?.id as string}`}>
          Edit document
        </Link>
      </div>
    </section>
  )
}

export default DocumentRenderId