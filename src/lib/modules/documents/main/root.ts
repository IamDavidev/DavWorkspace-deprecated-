import { type RepositoryQuerier } from '../adapters/drivens/repository-querier.adapter'
import { type ForControlOperating } from '../ports/drivens/ControlOperating.port'
import { type RepositoryQuerying } from '../ports/drivens/RepositoryQuerying.port'
import {
  type DocumentCreatingResult,
  type DocumentEntity,
  type DocumentToUpdating,
  type ReponseDeletingDocument,
  type ResponseOperation
} from './entities/documet.entity'

export interface ForDocumentRepository
  extends RepositoryQuerying,
    ForControlOperating {}

export class DocumentRepository implements ForDocumentRepository {
  constructor(
    private readonly controlOperating: ForControlOperating,
    private readonly repositoryQuerier: RepositoryQuerier
  ) {}

  async getDocumentById(
    id: string,
    ownerId: string
  ): Promise<DocumentEntity | null> {
    return await this.repositoryQuerier.getDocumentById(id, ownerId)
  }

  async getAllDocumentsByOwnerId(
    ownerId: string
  ): Promise<DocumentEntity[] | null> {
    return await this.repositoryQuerier.getAllDocumentsByOwnerId(ownerId)
  }

  async createDocument(document: DocumentEntity): Promise<ResponseOperation> {
    return await this.controlOperating.createDocument(document)
  }

  async updateDocument(
    document: DocumentToUpdating
  ): Promise<DocumentCreatingResult> {
    return await this.controlOperating.updateDocument(document)
  }

  async deleteDocument(id: string): Promise<ReponseDeletingDocument> {
    return await this.controlOperating.deleteDocument(id)
  }
}
