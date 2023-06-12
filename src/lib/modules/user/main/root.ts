import { type ForControlQuerying } from '@lib/modules/user/ports/drivens/ControlQuerying.port'
import { type PersistanceUser } from '@lib/modules/user/schemas/user.model'

import { type ForControlAuthenticating } from '@lib/modules/user/ports/drivens/ControlAuthenticatying.port'


export interface ForUserRepository extends ForControlQuerying {
}

export class UserRepository implements ForUserRepository {
  constructor(
    private readonly controlQuerying: ForControlQuerying
  ) {
  }

  async getCurrentUser(): Promise<PersistanceUser | null> {
    return await this.controlQuerying.getCurrentUser()
  }

}

export interface ForUserAuthRepository extends ForControlAuthenticating {
}

export class UserAuthRepository implements ForUserAuthRepository {
  constructor(
    private readonly ControlAuthenticator: ForControlAuthenticating
  ) {
  }

  async signOut(): Promise<void> {
    await this.ControlAuthenticator.signOut()
  }

  async signInWithGithub(): Promise<void> {
    await this.ControlAuthenticator.signInWithGithub()
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    await this.ControlAuthenticator.signInWithEmailAndPassword(
      email,
      password
    )
  }

  async signInWithGoogle(): Promise<void> {
    await this.ControlAuthenticator.signInWithGithub()
  }
}
