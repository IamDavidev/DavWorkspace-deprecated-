import { cookies, headers } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

import { type DBUser, type PersistanceUser } from '../schemas/user.model'
import { type IUserRepository } from '../schemas/repository.model'

interface IControlQuerier {
  getCurrentUser: () => Promise<PersistanceUser | null>
}

export class ControllQuerier implements IControlQuerier {
  constructor(private readonly ForAdapterUser: ForAdapterUser) {}

  private readonly client = createServerComponentSupabaseClient({
    cookies,
    headers
  })

  async getCurrentUser(): Promise<PersistanceUser | null> {
    const {
      data: { user },
      error
    } = await this.client.auth.getUser()

    console.log({
      user,
      error
    })

    return await this.ForAdapterUser.toPersistence(user)
  }
}

export class UserRepository implements IUserRepository {
  constructor(private readonly ControlQuerier: ControllQuerier) {}

  async getCurrentUser(): Promise<PersistanceUser | null> {
    return await this.ControlQuerier.getCurrentUser()
  }
}

interface IForAdapterUser {
  toPersistence: (user: DBUser | null) => Promise<PersistanceUser | null>
}

export class ForAdapterUser implements IForAdapterUser {
  async toPersistence(user: DBUser | null): Promise<PersistanceUser | null> {
    if (user === null) return null

    return {
      id: user.id,
      avatar_url: user?.user_metadata?.avatar_url ?? '',
      created_at: user.created_at,
      nickname: user?.user_metadata?.nickname ?? '',
      email: user.email,
      last_sign_in_at: user.last_sign_in_at,
      updated_at: user.updated_at
    }
  }
}
