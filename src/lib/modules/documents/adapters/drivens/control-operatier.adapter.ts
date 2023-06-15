import { type SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type {
  DocumentCreatingResult,
  DocumentEntity,
  DocumentToUpdating,
  ResponseDeletingDocument,
  ResponseOperation,
  ResponseUpdatingDocument
} from '../../main/entities/documet.entity'
import { type ForControlOperating } from '../../ports/drivens/ControlOperating.port'
import { type UUID } from '@lib/modules/shared/uuid.type'

export class ControlOperator implements ForControlOperating {
  constructor(private readonly client: SupabaseClient) {
  }

  async createDocument(document: DocumentEntity): Promise<ResponseOperation> {
    const { data, status, error } = await this.client
      .from('documents')
      .insert([document])


    console.log('ERROR CREATE DOCUMENT', error)
    console.log('DATA CREATE DOCUMENT', data)
   
    if (data === null)
      return {
        document: null,
        ok: false,
        status: status ?? null
      }

    const documentResponse = data[0] as DocumentCreatingResult

    return {
      document: documentResponse,
      ok: status === 201,
      status: status ?? null
    }
  }

  async updateDocument(
    document: DocumentToUpdating,
    documentId: UUID
  ): Promise<ResponseUpdatingDocument> {

    const { status, error } = await this.client
      .from('documents')
      .update(document)
      .eq('id', documentId)

    if (error !== null) return {
      ok: false,
      status: status ?? null,
      messageError: error.message
    }

    return {
      ok: true,
      status: 200
    }

  }

  async deleteDocument(id: string): Promise<ResponseDeletingDocument> {
    return {
      ok: true,
      status: 200
    }
  }
}
