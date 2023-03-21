import { type User } from '@supabase/auth-helpers-nextjs'

import { serverClient } from '@lib/clients/supbaseServer.client'
import { type AuthError } from '@supabase/supabase-js'

export enum PROVIDERS_AUTH {
  GITHUB = 'github',
  GOOGlE = 'google'
}
export interface IUserServer {
  user: User | null
  error: AuthError | null
}

export class UserServerRepository {
  private getServer(): void {}

  public static async getUserServer(): Promise<IUserServer> {
    const userDataPromise = (await serverClient).auth.getUser()

    const { data, error } = await userDataPromise
    return {
      user: data.user ?? null,
      error: error ?? null
    }
  }
}
