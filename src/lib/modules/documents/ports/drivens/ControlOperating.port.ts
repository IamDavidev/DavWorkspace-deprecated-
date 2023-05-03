import { type UUID } from '@lib/modules/shared/uuid.type'
import {
  type DocumentCreatingResult,
  type DocumentEntity,
  type DocumentToUpdating,
  type ResponseOperation,
  type ReponseDeletingDocument
} from '../../main/entities/documet.entity'

export interface ForControlOperating {
  createDocument: (document: DocumentEntity) => Promise<ResponseOperation>

  updateDocument: (
    document: DocumentToUpdating
  ) => Promise<DocumentCreatingResult>

  deleteDocument: (id: UUID) => Promise<ReponseDeletingDocument>
}
