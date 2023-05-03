import { type SupabaseClient } from '@supabase/auth-helpers-nextjs'

import { type DocumentEntity } from '../../main/entities/documet.entity'
import { type RepositoryQuerying } from '../../ports/drivens/RepositoryQuerying.port'

export class RepositoryQuerier implements RepositoryQuerying {
  constructor(private readonly client: SupabaseClient) {}

  async getAllDocumentsByOwnerId(
    ownerId: string
  ): Promise<DocumentEntity[] | null> {
    const { data } = await this.client
      .from('documents')
      .select('*')
      .eq('id_owner', ownerId)

    const documents = (data as DocumentEntity[]) ?? null

    return documents
  }

  async getDocumentById(
    id: string,
    ownerId: string
  ): Promise<DocumentEntity | null> {
    const { data } = await this.client
      .from('documents')
      .select('*')
      .eq('id', id)
      .eq('id_owner', ownerId)

    if (data === null) return null

    const document = data[0] as DocumentEntity

    return document
  }
}
