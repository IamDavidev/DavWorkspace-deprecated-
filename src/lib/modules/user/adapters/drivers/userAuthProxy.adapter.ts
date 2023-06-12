import { type  ForUserAuthRepository, type UserAuthRepository } from '@lib/modules/user/main/root'

export class UserAuthProxyAdapter implements ForUserAuthRepository {

  constructor(
    private readonly repository: UserAuthRepository
  ) {
  }

  async signOut(): Promise<void> {
    await this.repository.signOut()
  }

  async signInWithGithub(): Promise<void> {
    await this.repository.signInWithGithub()
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    await this.repository.signInWithEmailAndPassword(email, password)
  }

  async signInWithGoogle(): Promise<void> {
    await this.repository.signInWithGoogle()
  }
}