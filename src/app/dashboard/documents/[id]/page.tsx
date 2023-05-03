import { compositionRootDocument } from "@lib/modules/documents/main/compositionRootDocuments"

interface DocumentRenderIdProps {
  params: {
    id: string
  }
}

const DocumentRenderId = async ({
  params
}: DocumentRenderIdProps): Promise<JSX.Element> => {
  const { id: docId } = params

  const { documentProxyAdapter } = compositionRootDocument()


  const document = await documentProxyAdapter.getDocumentById(docId)

  return (
    <>
      <h1>
        {
          document?.title
        }
      </h1>
    </>
  )
}

export default DocumentRenderId