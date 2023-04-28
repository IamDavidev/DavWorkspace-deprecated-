import { type User } from "@supabase/supabase-js";

// export interface ITracketUser {
//   created_at: string;
//   updated_at: string;
//   last_sign_in_at: string;
// }

export type ITracketUser = Pick<
  User,
  "created_at" | "updated_at" | "last_sign_in_at"
>;

// export interface IProfileUser {
//   avatar_url: string;
//   nickname: string;
//   email: string;
//   id: string;
// }

export type IProfileUser = Pick<User, "email" | "id"> & {
  avatar_url: string | null;
  nickname: string;
};

export type PersistanceUser = ITracketUser & IProfileUser;
export type DBUser = User;
