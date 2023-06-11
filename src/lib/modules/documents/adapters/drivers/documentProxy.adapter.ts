import type {
  DocumentEntity,
  DocumentToUpdating,
  ResponseDeletingDocument,
  ResponseOperation,
  ResponseUpdatingDocument
} from '../../main/entities/documet.entity'
import { type DocumentRepository, type ForDocumentRepository } from '../../main/root'
import { UUID } from '@lib/modules/shared/uuid.type'

export class DocumentProxyAdapter implements ForDocumentRepository {
  constructor(private readonly repository: DocumentRepository) {
  }

  async getAllDocumentsByOwnerId(
    ownerId: string
  ): Promise<DocumentEntity[] | null> {
    return await this.repository.getAllDocumentsByOwnerId(ownerId)
  }

  async createDocument(document: DocumentEntity): Promise<ResponseOperation> {
    return await this.repository.createDocument(document)
  }

  async updateDocument(
    document: DocumentToUpdating,
    documentId: UUID
  ): Promise<ResponseUpdatingDocument> {
    return await this.repository.updateDocument(document, documentId)
  }

  async deleteDocument(id: string): Promise<ResponseDeletingDocument> {
    return await this.repository.deleteDocument(id)
  }

  async getDocumentById(id: string): Promise<DocumentEntity | null> {
    return await this.repository.getDocumentById(id)
  }
}
