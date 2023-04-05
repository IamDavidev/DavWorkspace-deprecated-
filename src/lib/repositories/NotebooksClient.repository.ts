import { browserClient } from "@lib/clients/supbaseBrowser.client";

import {
  type INotebook,
  type INotebookBadResponse,
} from "@lib/models/Notebook.interface";

export class NotebookBrowserRepository {
  public async createNew(
    notebook: INotebook,
  ): Promise<INotebookBadResponse> {
    const { error, status } = await browserClient.from("notebooks").insert([
      notebook,
    ]);

    return {
      error,
      status,
    };
  }
}

export const statusNotebook = {
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
  actived: "actived",
};
