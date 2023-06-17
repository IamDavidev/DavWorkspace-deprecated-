import { type SupabaseClient } from '@supabase/auth-helpers-nextjs'

import { type ForControlAuthenticating } from '@lib/modules/user/ports/drivens/ControlAuthenticatying.port'

export enum PROVIDERS_AUTH {
  GITHUB = 'github',
  GOOGlE = 'google',
}


export class ControlAuthenticator implements ForControlAuthenticating {

  constructor(
    private readonly client: SupabaseClient
  ) {
  }

  public async signInWithGithub(): Promise<void> {
    const { data, error } = await this.client.auth.signInWithOAuth({
      provider: PROVIDERS_AUTH.GITHUB,
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
    console.log('SIGN IN WITH GITHUB DATA:', data)
    console.log('SIGN IN WITH GITHUB ERROR:', error)
  }

  public async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    await this.client.auth.signInWithPassword({
      email,
      password
    })
  }

  public async signOut(): Promise<void> {
    const { error } = await this.client.auth.signOut()

    console.log('SIGN OUT ERROR:', error)
  }
}