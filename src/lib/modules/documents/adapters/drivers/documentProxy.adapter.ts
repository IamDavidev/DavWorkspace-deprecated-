import {
  type DocumentCreatingResult,
  type DocumentEntity,
  type DocumentToUpdating,
  type ResponseDeletingDocument,
  type ResponseOperation
} from '../../main/entities/documet.entity'
import {
  type DocumentRepository,
  type ForDocumentRepository
} from '../../main/root'

export class DocumentProxyAdapter implements ForDocumentRepository {
  constructor(private readonly respository: DocumentRepository) {}
  async getAllDocumentsByOwnerId(
    ownerId: string
  ): Promise<DocumentEntity[] | null> {
    return await this.respository.getAllDocumentsByOwnerId(ownerId)
  }

  async createDocument(document: DocumentEntity): Promise<ResponseOperation> {
    return await this.respository.createDocument(document)
  }

  async updateDocument(
    document: DocumentToUpdating
  ): Promise<DocumentCreatingResult> {
    return await this.respository.updateDocument(document)
  }

  async deleteDocument(id: string): Promise<ResponseDeletingDocument> {
    return await this.respository.deleteDocument(id)
  }

  async getDocumentById(id: string): Promise<DocumentEntity | null> {
    return await this.respository.getDocumentById(id)
  }
}
