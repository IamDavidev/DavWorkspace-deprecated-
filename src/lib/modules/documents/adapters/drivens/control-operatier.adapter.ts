import { type SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type {
  DocumentCreatingResult,
  DocumentEntity,
  DocumentToUpdating,
  ResponseDeletingDocument,
  ResponseOperation
} from '../../main/entities/documet.entity'
import { type ForControlOperating } from '../../ports/drivens/ControlOperating.port'

export class ControlOperator implements ForControlOperating {
  constructor(private readonly client: SupabaseClient) {}

  async createDocument(document: DocumentEntity): Promise<ResponseOperation> {
    const { data, status } = await this.client
      .from('documents')
      .insert(document as any)

    if (data === null)
      return {
        document: null,
        ok: false,
        status: status ?? null
      }

    const documetResponse = data[0] as DocumentCreatingResult

    return {
      document: documetResponse,
      ok: status === 201,
      status: status ?? null
    }
  }

  async updateDocument(
    document: DocumentToUpdating
  ): Promise<DocumentCreatingResult> {
    return {
      created_at: new Date(),
      id: '123'
    }
  }

  async deleteDocument(id: string): Promise<ResponseDeletingDocument> {
    return {
      ok: true,
      status: 200
    }
  }
}
