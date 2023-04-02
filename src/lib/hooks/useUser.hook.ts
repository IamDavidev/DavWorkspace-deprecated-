// import { supabaseClient } from '@lib/clients/supabase.client'

import { type User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { SUPABASE_KEY, SUPABASE_URL } from "@constants/client.const";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
  },
});

export enum PROVIDERS_AUTH {
  GITHUB = "github",
  GOOGlE = "google",
}

export interface IUseUser {
  user: IUserState;
  setUser: (user: IUserState) => void;
  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<User | null>;
}
export async function getUser(): Promise<User | null> {
  const { data } = await supabaseClient.auth.getUser();
  return data.user;
}

interface IErrrorUser {
  message: string | null;
  status: number | null;
}

interface IUserState {
  data: User | null;
  error: IErrrorUser;
  loading: boolean;
}

export const INITIAL_USER_STATE: IUserState = {
  data: null,
  error: {
    message: null,
    status: null,
  },
  loading: false,
};

export class AuthError extends Error {
  status: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "AuthError";
    this.status = status ?? 404;
  }
}

export function useUser(): IUseUser {
  const [user, setUser] = useState<IUserState>(INITIAL_USER_STATE);

  const signInWithGithub = async (): Promise<void> => {
    try {
      const { error: errorUser } = await supabaseClient.auth.signInWithOAuth({
        provider: PROVIDERS_AUTH.GITHUB,
      });

      if (errorUser != null) {
        setUser({
          data: null,
          error: {
            message: errorUser?.message ?? "Error",
            status: errorUser?.status ?? 404,
          },
          loading: false,
        });
      }
    } catch (err) {}
  };

  const signOut = async (): Promise<void> => {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error != null) {
        console.error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signUpWithEmail = async (
    email: string,
    password: string,
  ): Promise<User | null> => {
    try {
      const {
        error,
        data: { user },
      } = await supabaseClient.auth.signUp({
        email,
        password,
      });
      if (error != null) {
        throw new AuthError(error.message, error.status);
      }

      return user ?? null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  useEffect(() => {
    console.log("useEffect");
    getUser()
      .then((user) => {
        console.log("user", user);
      })
      .catch(() => {});
  }, []);

  return {
    user,
    setUser,
    signInWithGithub,
    signOut,
    signUpWithEmail,
  };
}
