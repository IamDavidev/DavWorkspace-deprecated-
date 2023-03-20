import { cookies, headers } from 'next/headers'
import {
  createServerComponentSupabaseClient,
  type User,
  type SupabaseClient
} from '@supabase/auth-helpers-nextjs'

import { type AuthError } from '@supabase/supabase-js'

export enum PROVIDERS_AUTH {
  GITHUB = 'github',
  GOOGlE = 'google'
}
export interface IUserServer {
  user: User | null
  error: AuthError | null
}

export const createClient = async (): Promise<SupabaseClient> => {
  return createServerComponentSupabaseClient({
    cookies,
    headers
  })
}

export class UserServerRepository {
  private getServer(): void {}

  private static readonly server = createClient()

  public static async getUserServer(): Promise<IUserServer> {
    const userDataPromise = (await this.server).auth.getUser()

    const { data, error } = await userDataPromise
    return {
      user: data.user ?? null,
      error: error ?? null
    }
  }
}
