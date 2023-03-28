// import {
//   createClient,
//   type SupabaseClient,
//   type User
// } from '@supabase/supabase-js'
import { cookies, headers } from 'next/headers'

// import { toast } from 'sonner'
import {
  createServerComponentSupabaseClient,
  type User,
  type SupabaseClient
} from '@supabase/auth-helpers-nextjs'

export enum PROVIDERS_AUTH {
  GITHUB = 'github',
  GOOGlE = 'google'
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

  public static async getUserServer(): Promise<{
    user: User | null
  }> {
    const userDataPromise = (await this.server).auth
      .getUser()
      .then(data => data)

    const userData = await userDataPromise
    return {
      user: userData.data.user
    }
  }
}
