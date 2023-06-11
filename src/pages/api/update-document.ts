import type { NextApiRequest, NextApiResponse } from 'next'

import { METHODS } from '@constants/methods.const'
import { type  BodyUpdateDocument } from '@/app/dashboard/editor/document/[id]/components/Editor.component'
import { compositionRootDocument } from '@lib/modules/documents/main/compositionRootDocuments'
import { compositionRootUser } from '@lib/modules/user/compositionRootUser'
import { ResponseUpdatingFailure } from '@lib/modules/documents/main/entities/documet.entity'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {

  const { body, method } = req

  if (method !== METHODS.POST) res.status(405).json({ message: 'Method not allowed' })

  const { userId, documentId, documentToUpdate } = body as BodyUpdateDocument

  if (userId == null || documentId == null || documentToUpdate == null) res.status(400).json({ message: 'Bad request' })

  const { documentProxyAdapter } = compositionRootDocument()
  const { userRepository } = compositionRootUser()

  /**
   * Verify if document exists
   */
  const document = await documentProxyAdapter.getDocumentById(documentId)

  if (document === null) res.status(404).json({ message: 'Document not found' })


  /**
   * Verify if user is the owner of document
   */
  const user = await userRepository.getCurrentUser()
  if (user?.id !== userId) res.status(401).json({ message: 'Unauthorized' })


  const responseUpdateDocument = await documentProxyAdapter.updateDocument(documentToUpdate, documentId)


  if (!responseUpdateDocument.ok) res
    .status((responseUpdateDocument.status as number) ?? 500)
    .json({
      message: 'Failed to update document',
      error: (responseUpdateDocument as ResponseUpdatingFailure).messageError ?? ''
    })
  // if (responseUpdateDocument.ok) res.status(200).json({ message: 'Document updated' })
  
  res.status(200).json({ message: 'Document updated' })
}