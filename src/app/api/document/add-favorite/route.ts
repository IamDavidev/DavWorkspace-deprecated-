import { type NextRequest, NextResponse } from 'next/server'
import { STATUS_CODE } from '@lib/models/StatusCode.enum'
import { METHODS } from '@constants/methods.const'
import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { compositionRootDocumentRoutes } from '@lib/modules/documents/main/compositionRootDocuments'

export async function POST(req: NextRequest): Promise<NextResponse> {

  if (req.method !== METHODS.POST) return NextResponse.json({
    message: 'Method not allowed',
    status: STATUS_CODE.METHOD_NOT_ALLOWED
  })

  const body = await req.json()

  const {
    newFavoriteStatus,
    documentId
  } = body

  if (documentId === undefined) return NextResponse.json({
    message: 'Bad request',
    status: STATUS_CODE.BAD_REQUEST
  })

  const { userProxyAdapter } = compositionRootUser()

  const user = await userProxyAdapter.getCurrentUser()

  if (user == null) return NextResponse.json({
    message: 'Unauthorized',
    status: STATUS_CODE.UNAUTHORIZED
  })

  const { documentProxyAdapter } = compositionRootDocumentRoutes()

  const document = await documentProxyAdapter.getDocumentById((documentId as string))


  if (document == null) return NextResponse.json({
    message: 'Document not found',
    status: STATUS_CODE.NOT_FOUND
  })

  if (document.owner_id !== user.id) return NextResponse.json({
    message: 'Unauthorized',
    status: STATUS_CODE.UNAUTHORIZED
  })

  const responseUpdatingDocument = await documentProxyAdapter.updateDocument({
    isFavorite: newFavoriteStatus
  }, documentId as string)


  if (!responseUpdatingDocument.ok) return NextResponse.json({
    message: 'Error updating document',
    status: STATUS_CODE.INTERNAL_SERVER_ERROR
  })

  return NextResponse.json({
    message: 'Document updated',
    status: STATUS_CODE.OK
  })

}