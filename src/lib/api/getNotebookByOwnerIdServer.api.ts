import {
  type INotebook,
  type OwnerIdType,
} from "@lib/models/Notebook.interface";
import { type ResponseDB } from "@lib/models/ResponseDB.type";
import { NotebooksServerRepository } from "@lib/repositories/NotebooksServer.repository";
import { type PostgrestError } from "@supabase/supabase-js";

interface INotebooksResponse {
  notebooks: INotebook[] | [];
  isOk: boolean;
  error: {
    message: string;
    code?: string;
    status: number;
  };
}

interface IAdapterNotebooksProps {
  notebooksDB: ResponseDB;
  error: PostgrestError | null;
  status: number | null;
}

export type CollectionNotebooks = INotebook[] | [];

export function adapterNotebooksResponse({
  notebooksDB,
  error,
  status,
}: IAdapterNotebooksProps): INotebooksResponse {
  const isOk = true;

  const notebooks = notebooksDB as CollectionNotebooks;

  return {
    notebooks,
    isOk,
    error: {
      message: error?.message ?? "",
      code: error?.code ?? "",
      status: status ?? 404,
    },
  };
}

export async function apiGetNotebooksByOwnerIdServer(
  ownerId: OwnerIdType,
): Promise<INotebooksResponse> {
  const apiServer = new NotebooksServerRepository();

  // missing verify if ownerId is valid

  const { notebooks: notebooksDB, error, status } = await apiServer
    .findByOwnerId(ownerId);

  return adapterNotebooksResponse({
    notebooksDB,
    error,
    status,
  });
}
