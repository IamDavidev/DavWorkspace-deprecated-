import { type User } from '@supabase/supabase-js'

export type ITracketUser = Pick<
  User,
  'created_at' | 'updated_at' | 'last_sign_in_at'
>;

export type IProfileUser = Pick<User, 'email' | 'id'> & {
  avatar_url: string | null;
  nickname: string;
};

export type PersistanceUser = ITracketUser & IProfileUser;
export type DBUser = User;
