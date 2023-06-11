import { type UUID } from '@lib/modules/shared/uuid.type'
import type {
  DocumentEntity,
  DocumentToUpdating,
  ResponseDeletingDocument,
  ResponseOperation,
  ResponseUpdatingDocument
} from '../../main/entities/documet.entity'

export interface ForControlOperating {
  createDocument: (document: DocumentEntity) => Promise<ResponseOperation>

  updateDocument: (
    document: DocumentToUpdating,
    documentId: UUID
  ) => Promise<ResponseUpdatingDocument>

  deleteDocument: (id: UUID) => Promise<ResponseDeletingDocument>
}
