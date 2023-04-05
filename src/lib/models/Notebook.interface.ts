import { type PostgrestError } from "@supabase/supabase-js";
import { type ResponseDB } from "./ResponseDB.type";

export type OwnerIdType = string;

export interface INotebook {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  image: string;
  owner_id: OwnerIdType;
}

export type NotebooksResponseDB = ResponseDB | [];

export interface INotebooksResponse {
  notebooks: NotebooksResponseDB;
  error: PostgrestError | null;
  status: number | null;
}

export interface INotebookBadResponse {
  error: PostgrestError | null;
  status: number | string;
}
