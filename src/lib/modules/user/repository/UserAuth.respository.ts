import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

import { type IUserAuthRepository } from "../schemas/repository.model";

interface IControlAuthenticator {
  signInWithGithub: () => Promise<void>;
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
  private readonly client = createBrowserSupabaseClient();

  public async signInWithGithub(): Promise<void> {
    await this.client.auth.signInWithOAuth({
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
    const { error } = await this.client.auth.signOut();
    console.info(
      "🚀 ~>  file: UserAuth.respository.ts:39 ~>  ControlAuthenticator ~>  signOut ~>  error:",
      error,
    );
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
