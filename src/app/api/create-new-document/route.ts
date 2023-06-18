import { NextResponse } from 'next/server'
import { v4 as generateUUIDV4 } from 'uuid'

import { compositionRootUser } from '@lib/modules/user/main/compositionRootUser'
import { STATUS_CODE } from '@lib/models/StatusCode.enum'
import { compositionRootDocumentRoutes } from '@lib/modules/documents/main/compositionRootDocuments'
import { type  DocumentEntity, DocumentStatus } from '@lib/modules/documents/main/entities/documet.entity'

export async function POST(req: Request): Promise<NextResponse> {

  try {
    const { userProxyAdapter } = compositionRootUser()

    const currentUser = await userProxyAdapter.getCurrentUser()

    if (currentUser === null) return NextResponse.json({
      message: 'Unauthorized',
      status: STATUS_CODE.UNAUTHORIZED
    })

    const { documentProxyAdapter } = compositionRootDocumentRoutes()

    const documentToCreate: DocumentEntity = {
      id: generateUUIDV4(),
      created_at: new Date(),
      owner_id: currentUser.id,
      status: DocumentStatus.Active,
      current_content: '# New document',
      title: 'New document',
      updated_at: new Date(),
      id_notebook: '3a2a8d86-2397-4e6e-80c0-bcc620c88a32',
      tags: [],
      latest_content: '',
      isFavorite: false
    }

    console.log('documentToCreate', documentToCreate)

    const foundDocument = await documentProxyAdapter.getDocumentById(documentToCreate.id)

    console.log('foundDocument', foundDocument)

    const isDocumentAlreadyExists = Boolean(foundDocument)

    if (isDocumentAlreadyExists) return NextResponse.json({
      message: 'Document already exists',
      status: STATUS_CODE.CONFLICT
    })

    await documentProxyAdapter.createDocument(documentToCreate)

    return NextResponse.json({
      message: 'OK',
      status: STATUS_CODE.OK,
      id: documentToCreate.id
    })

  } catch (e) {
    console.error(e)
    return NextResponse.json({
      message: 'Internal server error',
      status: STATUS_CODE.INTERNAL_SERVER_ERROR
    })
  }
}