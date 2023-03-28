import { serverClient } from "@lib/clients/supbaseServer.client";
import { type PostgrestError } from "@supabase/supabase-js";

type NotebooksType = Array<Record<string, any>> | [];

interface INotebooksResponse {
  notebooks: NotebooksType;
  error: PostgrestError | null;
  status: number | null;
}

export type OwnerIdType = string;

export class NotebooksServerRepository {
  private async getClient(): Promise<string> {
    return "";
  }

  public static async getAllNotebooks(): Promise<INotebooksResponse> {
    const {
      data: notebooks,
      error,
      status,
    } = await (await serverClient).from("notebooks").select("*");

    return {
      notebooks: notebooks ?? [],
      error,
      status,
    };
  }

  public static async getNotebooksByOwnerId(
    ownerId: OwnerIdType,
  ): Promise<INotebooksResponse> {
    const {
      data: notebooks,
      error,
      status,
    } = await (await serverClient)
      .from("notebooks")
      .select("*")
      .eq("owner_id", ownerId);

    return {
      notebooks: notebooks ?? [],
      error,
      status,
    };
  }
}
