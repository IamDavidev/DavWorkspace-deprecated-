import { NextResponse } from 'next/server'

import { type BodyUpdateDocument } from '@/app/dashboard/editor/document/[id]/components/Editor.component'
import { type ResponseUpdatingFailure } from '@lib/modules/documents/main/entities/documet.entity'

import { METHODS } from '@constants/methods.const'
import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { compositionRootDocumentRoutes } from '@lib/modules/documents/main/compositionRootDocuments'


export enum STATUS_CODE {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500
}


export async function POST(req: Request): Promise<NextResponse> {

  const { method } = req

  console.log('method', method)
  // console.log('body', await req.json())


  if (method !== METHODS.POST)
    return NextResponse.json({
      message: 'Method not allowed',
      status: 405
    })

  //
  // const {
  //   userId,
  //   documentId,
  //   documentToUpdate
  // } = await req.json() as BodyUpdateDocument

  const body = await req.json()

  console.log('body', body)

  const {
    userId,
    documentId,
    documentToUpdate
  } = body as BodyUpdateDocument

  console.log('userId', userId)
  console.log('documentId', documentId)
  console.log('documentToUpdate', documentToUpdate)

  if (userId == null || documentId == null || documentToUpdate == null) NextResponse.json({
    message: 'Bad request',
    status: STATUS_CODE.BAD_REQUEST
  })

  const { userProxyAdapter } = compositionRootUser()

  const user = await userProxyAdapter.getCurrentUser()


  if ((user == null) || user?.id !== userId) NextResponse.json({
    message: 'Unauthorized',
    status: STATUS_CODE.UNAUTHORIZED
  })

  const { documentProxyAdapter } = compositionRootDocumentRoutes()
  const document = await documentProxyAdapter.getDocumentById((documentId as string))

  if (document == null) NextResponse.json({
    message: 'Document not found',
    status: STATUS_CODE.NOT_FOUND
  })

  if (document?.owner_id !== userId) NextResponse.json({
    message: 'Unauthorized',
    status: STATUS_CODE.UNAUTHORIZED
  })

  const responseUpdatingDocument = await documentProxyAdapter.updateDocument(documentToUpdate, documentId as string)


  if (!responseUpdatingDocument.ok) NextResponse.json({
    message: 'Failed to update document',
    status: (responseUpdatingDocument as ResponseUpdatingFailure).status ?? STATUS_CODE.INTERNAL_SERVER_ERROR,
    error: (responseUpdatingDocument as ResponseUpdatingFailure).messageError ?? ''
  })

  return NextResponse.json({
    message: 'Document updated',
    status: STATUS_CODE.OK
  })

  // return NextResponse.json({
  //   message: 'Method not allowed',
  // })
}


