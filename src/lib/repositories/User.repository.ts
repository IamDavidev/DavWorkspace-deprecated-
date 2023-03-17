import { SUPABASE_KEY, SUPABASE_URL } from '@constants/client.const'
import {
  createClient,
  type SupabaseClient,
  type User
} from '@supabase/supabase-js'
import { toast } from 'sonner'

export enum PROVIDERS_AUTH {
  GITHUB = 'github',
  GOOGlE = 'google'
}

export type UserResponse = {
  user: User
} | null
export type UserResponsePromise = Promise<UserResponse>

export class UserRepository {
  private getClient(): SupabaseClient {
    return createClient(SUPABASE_URL, SUPABASE_KEY)
  }

  private static readonly client: SupabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  )

  public static async signInWithGithub(): Promise<void> {
    const { error } = await this.client.auth.signInWithOAuth({
      provider: PROVIDERS_AUTH.GITHUB
    })

    if (error !== null) {
      throw new Error(error.message)
    }
  }

  public static async signInWithEmailAndPassword(
    userEmail: string,
    userPassword: string
  ): Promise<void> {
    const { error } = await this.client.auth.signInWithPassword({
      email: userEmail,
      password: userPassword
    })

    if (error !== null) {
      throw new Error(error.message)
    }
  }

  public static async signUpWithEmailAndPassword(
    userEmail: string,
    userPassword: string
  ): Promise<UserResponse> {
    console.log(userEmail, userPassword)
    const { data, error } = await this.client.auth.signUp({
      email: userEmail,
      password: userPassword
    })

    console.log(data, error)

    if (error !== null) {
      return null
    }
    if (data.user === null) {
      return null
    }
    toast.message(`${userEmail} - ${userPassword}`, {
      description: 'Creating user...'
    })

    return {
      user: data.user
    }
  }

  public static async getUser(): Promise<void> {
    const user = await this.client.auth.getSession()
    console.log('user', user)
  }

  /*
  public async signOut(): Promise<void> {
    const {} = await this.client.auth.signOut()
  }
  */
}
