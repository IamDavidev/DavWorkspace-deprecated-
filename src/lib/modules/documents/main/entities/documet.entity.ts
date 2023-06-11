import { type UUID } from '@lib/modules/shared/uuid.type'

export enum DocumentStatus {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
  Active = 'active',
  /**
   * after 1 week of being trashed, the document is deleted
   */
  Trashed = 'trashed'
}

export interface DocumentEntity {
  id: UUID
  title: string
  status: DocumentStatus
  current_content: string
  latest_content: string
  tags: string[]
  created_at: Date
  updated_at: Date
  id_notebook: UUID
}

export interface DocumentToUpdating
  extends Omit<DocumentEntity, 'id' | 'created_at' | 'id_notebook'> {}

export interface ResponseOperation {
  ok: boolean
  status: number | string | null
  document: DocumentCreatingResult | null
}

export interface DocumentCreatingResult
  extends Pick<DocumentEntity, 'id' | 'created_at'> {}

// export interface DocumentSuccessDeleting {
//   ok: boolean
//   status: number | string | null
// }

export interface ResponseDeletingDocument
  extends Pick<ResponseOperation, 'ok' | 'status'> {}

