import { browserClient } from "@lib/clients/supbaseBrowser.client";
import { type PostgrestError } from "@supabase/supabase-js";

interface INoteBook {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  image: string;
  owner_id: string;
}
interface ICreateNoteBookResponse {
  error: PostgrestError | null;
}

export class NotebookBrowserRepository {
  private async getClient(): Promise<string> {
    return "";
  }

  public static async createNewNotebook(
    notebook: INoteBook,
  ): Promise<ICreateNoteBookResponse> {
    const { error } = await browserClient.from("notebooks").insert([
      notebook,
    ]);
    return {
      error,
    };
  }
}

export const statusNotebook = {
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
  actived: "actived",
};
