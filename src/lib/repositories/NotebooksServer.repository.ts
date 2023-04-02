import { serverClient } from "@lib/clients/supbaseServer.client";

import {
  type INotebooksResponse,
  type OwnerIdType,
} from "@lib/models/Notebook.interface";

export class NotebooksServerRepository {
  public async findByOwnerId(
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
