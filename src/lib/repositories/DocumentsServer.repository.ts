import { serverClient } from "@lib/clients/supbaseServer.client";
import { type PostgrestError } from "@supabase/supabase-js";

export interface DocumentByNotebokIdResponse {
  documents: Array<{
    id: string;
    title: string;
  }>;
  error: PostgrestError | null;
  status: number | string;
}

export class DocumentsServerRespository {
  private getClient(): void {}

  public static async getAllDocumentByNotebookId(
    id: string,
    ownerId: string,
  ): Promise<DocumentByNotebokIdResponse> {
    const { data, error, status } = await (await serverClient).from("documents")
      .select("id,title")
      .eq(
        "id_notebook",
        id,
      );

    return {
      documents: data ?? [],
      error,
      status,
    };
  }
}
