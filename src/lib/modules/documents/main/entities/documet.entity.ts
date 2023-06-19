import { type UUID } from '@lib/modules/shared/uuid.type'

export enum DocumentStatus {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
  Active = 'active',
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
  owner_id: UUID
  isFavorite: boolean
}

export interface DocumentToUpdating {
  title?: string
  status?: DocumentStatus
  current_content?: string
  latest_content?: string
  tags?: string[]
  updated_at?: Date
  isFavorite?: boolean
}

export interface ResponseOperation {
  ok: boolean
  status: number | string | null
  document: DocumentCreatingResult | null
}

export interface DocumentCreatingResult
  extends Pick<DocumentEntity, 'id' | 'created_at'> {
}

export interface ResponseDeletingDocument
  extends Pick<ResponseOperation, 'ok' | 'status'> {
}

export interface ResponseUpdatingSuccess {
  ok: boolean
  status: number | string | null
}

export interface ResponseUpdatingFailure {
  ok: boolean
  status: number | string | null
  messageError: string
}

export type ResponseUpdatingDocument = ResponseUpdatingFailure | ResponseUpdatingSuccess
