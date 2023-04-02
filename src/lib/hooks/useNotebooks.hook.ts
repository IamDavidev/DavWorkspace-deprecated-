import {
  type INotebook,
  type INotebookBadResponse,
  type INotebooksResponse,
} from "@lib/models/Notebook.interface";
import { NotebookBrowserRepository } from "@lib/repositories/NotebooksClient.repository";
import { NotebooksServerRepository } from "@lib/repositories/NotebooksServer.repository";

interface IUseNotebooks {
  getNotebooksByOwnerIdServer: ({ ownerId }: {
    ownerId: string;
  }) => Promise<INotebooksResponse>;

  createNewNotebook: (notebook: INotebook) => Promise<INotebookBadResponse>;
}

export function useNotebooks(): IUseNotebooks {
  const notebooksBrowser = new NotebookBrowserRepository();
  const notebooksServer = new NotebooksServerRepository();

  const getNotebooksByOwnerIdServer = async ({
    ownerId,
  }: {
    ownerId: string;
  }): Promise<INotebooksResponse> => {
    const { notebooks, error, status } = await notebooksServer
      .findByOwnerId(ownerId);

    return {
      notebooks,
      error,
      status,
    };
  };

  const createNewNotebook = async (
    notebook: INotebook,
  ): Promise<INotebookBadResponse> => {
    const { error } = await notebooksBrowser.createNew(notebook);

    return {
      error,
    };
  };

  return {
    getNotebooksByOwnerIdServer,
    createNewNotebook,
  };
}
