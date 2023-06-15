import { type SupabaseClient } from '@supabase/auth-helpers-nextjs'

import { type DocumentEntity } from '../../main/entities/documet.entity'
import { type RepositoryQuerying } from '../../ports/drivens/RepositoryQuerying.port'

export class RepositoryQuerier implements RepositoryQuerying {
  constructor(private readonly client: SupabaseClient) {
  }

  async getAllDocumentsByOwnerId(
    ownerId: string
  ): Promise<DocumentEntity[] | null> {
    const { data, error } = await this.client
      .from('documents')
      .select('*')
      .eq('owner_id', ownerId)
    // add order for status on active
    
    console.log("ERROR FROM GET ALL DOCUMENTS BY OWNER ID: ", error)
    
    if(error !== null) return null

    return (data as DocumentEntity[]) ?? null
  }

  async getDocumentById(id: string): Promise<DocumentEntity | null> {
    const { data, error } = await this.client
      .from('documents')
      .select('*')
      .eq('id', id)

    console.log("ERROR FROM GET DOCUMENT BY ID: ", error)

    if (error !== null) return null

    return data[0] as DocumentEntity
  }
}
