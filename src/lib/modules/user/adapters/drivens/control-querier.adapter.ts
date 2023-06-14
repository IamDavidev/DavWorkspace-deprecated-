import { type SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { type ForControlQuerying } from '@lib/modules/user/ports/drivens/ControlQuerying.port'
import { type DBUser, type PersistanceUser } from '@lib/modules/user/schemas/user.model'

interface ForAdapterUser {
  toPersistence: (user: DBUser | null) => Promise<PersistanceUser | null>
}

export class ControlAdapterUser implements ForAdapterUser {
  async toPersistence(user: DBUser | null): Promise<PersistanceUser | null> {
    if (user === null) return null

    return {
      id: user.id,
      avatar_url: user?.user_metadata?.avatar_url ?? '',
      created_at: user.created_at,
      nickname: user?.user_metadata?.nickname ?? user.user_metadata?.user_name,
      email: user.email,
      last_sign_in_at: user.last_sign_in_at,
      updated_at: user.updated_at
    }
  }
}

export class RepositoryQuerier implements ForControlQuerying {

  constructor(
    private readonly client: SupabaseClient,
    private readonly controlAdapterUser: ForAdapterUser
  ) {
  }


  async getCurrentUser(): Promise<PersistanceUser | null> {
    const {
      data: { user },
    } = await this.client.auth.getUser()
    
    return await this.controlAdapterUser.toPersistence(user)
  }

}