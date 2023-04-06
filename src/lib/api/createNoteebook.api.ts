import { IMAGE_DEFAULT } from "@constants/DB.conts";
import {
  adapterResponseOk,
  type IResponseOk,
} from "@lib/adapters/responseOk.adapter";
import { type INotebook } from "@lib/models/Notebook.interface";
import { NotebookBrowserRepository } from "@lib/repositories/NotebooksClient.repository";
import { generateUUId } from "@lib/utils/generateUUId.util";

export interface ICreateNotebookProps {
  title: string;
  description: string;
  image: string | null;
  ownerId: string;
}

export async function apiCreateNotebook(
  { description, image, ownerId, title }: ICreateNotebookProps,
): Promise<IResponseOk> {
  const apiBrowser = new NotebookBrowserRepository();

  const notebook: INotebook = {
    title,
    created_at: new Date(),
    description,
    id: generateUUId(),
    image: image ?? IMAGE_DEFAULT,
    owner_id: ownerId,
  };

  const { error, status } = await apiBrowser.createNew(notebook);

  return adapterResponseOk(error, status);
}
