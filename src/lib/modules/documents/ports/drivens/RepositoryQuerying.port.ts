import { type DocumentEntity } from '../../main/entities/documet.entity'

export interface RepositoryQuerying {
  getDocumentById: (id: string) => Promise<DocumentEntity | null>
  getAllDocumentsByOwnerId: (
    ownerId: string
  ) => Promise<DocumentEntity[] | null>
}
