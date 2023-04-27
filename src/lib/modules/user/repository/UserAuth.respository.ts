import { createClient, type OAuthResponse } from "@supabase/supabase-js";

import { type IUserAuthRepository } from "../schemas/repository.model";
import { SUPABASE_KEY, SUPABASE_URL } from "@constants/client.const";

interface IControlAuthenticator {
  signInWithGithub: () => Promise<OAuthResponse>;
  signInWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<void>;
  signOut: () => Promise<void>;
}
export enum PROVIDERS_AUTH {
  GITHUB = "github",
  GOOGlE = "google",
}

export class ControlAuthenticator implements IControlAuthenticator {
  private readonly client = createClient(SUPABASE_URL, SUPABASE_KEY);

  public async signInWithGithub(): Promise<OAuthResponse> {
    return await this.client.auth.signInWithOAuth({
      provider: PROVIDERS_AUTH.GITHUB,
    });
  }

  public async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<void> {
    await this.client.auth.signInWithPassword({
      email,
      password,
    });
  }

  public async signOut(): Promise<void> {
    await this.client.auth.signOut();
  }
}

export class UserAuthRepository implements IUserAuthRepository {
  constructor(
    private readonly ControlAuthenticator: ControlAuthenticator,
  ) {
  }

  public async signOut(): Promise<void> {
    await this.ControlAuthenticator.signOut();
  }

  public async signInWithGithub(): Promise<void> {
    await this.ControlAuthenticator.signInWithGithub();
  }

  public async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<void> {
    await this.ControlAuthenticator.signInWithEmailAndPassword(
      email,
      password,
    );
  }

  public async signInWithGoogle(): Promise<void> {
    // change this
    // google auth
    await this.ControlAuthenticator.signInWithGithub();
  }
}
