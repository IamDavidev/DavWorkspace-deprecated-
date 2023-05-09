import { type PersistanceUser } from './user.model'

export interface IUserAuthRepository {
  signInWithGithub: () => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface IUserRepository {
  getCurrentUser: () => Promise<PersistanceUser | null>
}
