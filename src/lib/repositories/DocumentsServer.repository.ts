import { serverClient } from "@lib/clients/supbaseServer.client";
import {
  type PostgrestError,
  type SupabaseClient,
} from "@supabase/supabase-js";

export interface Document {
  id: string;
  created_at: string;
  title: string;
  content: string;
  tags: string[];
  status: string;
  id_notebook: string;
}

// export type Documen = Array<Record<string, any>> | [];

export interface DocumentResponse {
  document: Document | null;
  error: PostgrestError | null;
  status: number | string;
}

export interface DocumentByNotebokIdResponse {
  documents: Array<{
    id: string;
    title: string;
  }>;
  error: PostgrestError | null;
  status: number | string;
}

const indexFirstItem = 0;

export class DocumentsServerRespository {
  private async getClient(): Promise<SupabaseClient> {
    return await serverClient;
  }

  public static async getAllDocumentsByNotebookId(
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

  public static async createDocument(): Promise<void> {}

  public static async getDocumentById(
    docId: string,
  ): Promise<DocumentResponse> {
    const { data, error, status } = await (await serverClient).from("documents")
      .select("*").eq(
        "id",
        docId,
      );

    if (data === null) {
      return {
        document: null,
        error,
        status,
      };
    }

    const document = data[indexFirstItem] as Document;

    return {
      document,
      error,
      status,
    };
  }
}
