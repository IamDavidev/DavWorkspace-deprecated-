import {
  createClient,
  type User,
  type SupabaseClient
} from '@supabase/supabase-js'
import { SUPABASE_KEY, SUPABASE_URL } from '@constants/client.const'
import { toast } from 'sonner'
import { stylesToaster } from '@lib/constants/toasterStyles.const'

export enum PROVIDERS_AUTH {
  GITHUB = 'github',
  GOOGlE = 'google'
}

export type UserResponse = {
  user: User
} | null
export type UserResponsePromise = Promise<UserResponse>

export class UserRepository {
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
      toast.error(error.message + ' - ' + userEmail + ' - ' + userPassword, {
        style: {
          ...stylesToaster.error
        }
      })
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

  public user(): void {}

  /*
  public async signOut(): Promise<void> {
    const {} = await this.client.auth.signOut()
  }
  */
}
