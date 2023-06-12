import { type ForUserRepository } from '@lib/modules/user/main/root'
import { type PersistanceUser } from '@lib/modules/user/schemas/user.model'


export class  UserProxyAdapter implements ForUserRepository {
  constructor(private readonly repository: ForUserRepository) {
  }

  async getCurrentUser(): Promise<PersistanceUser | null> {
    return await this.repository.getCurrentUser()
  }
}