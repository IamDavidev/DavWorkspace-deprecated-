import { compositionRootDocument } from "@lib/modules/documents/main/compositionRootDocuments"
import Link from "next/link"

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
    <section className="w-full">
      <header className="min-h-[72px] w-full flex justify-center items-center">
        <h1>
          {document?.title}
        </h1>
      </header>
      <div className="p-4">
        <Link href={`/dashboard/editor/document/${document?.id as string}`}>
          Edit document
        </Link>
      </div>
    </section>
  )
}

export default DocumentRenderId