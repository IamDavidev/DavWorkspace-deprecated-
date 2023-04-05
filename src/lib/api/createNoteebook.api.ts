import { type INotebook } from "@lib/models/Notebook.interface";
import { NotebookBrowserRepository } from "@lib/repositories/NotebooksClient.repository";
import { generateUUId } from "@lib/utils/generateUUId.util";
import { type PostgrestError } from "@supabase/supabase-js";

export interface IResponseOk {
  isOk: boolean;
  error: {
    message: string;
    code: string | null;
    status: number | string;
    details: string | null;
  };
}

export const EMPTY_ERROR = {
  details: null,
  message: "",
  code: null,
};

export function adapterResponseOk(
  error: PostgrestError | null,
  status: string | number,
): IResponseOk {
  const isOk = error === null;

  const { details, code, message } = error ?? EMPTY_ERROR;

  return {
    isOk,
    error: {
      details,
      message,
      status,
      code,
    },
  };
}

export const IMAGE_DEFAULT =
  "https://media.istockphoto.com/id/182476659/es/foto/pintura-de-aerosol-lugar.jpg?s=612x612&w=0&k=20&c=Yg3wRXddzX5J0Nzpspg1BrJTmBwwU6-uyk9ZUY0avrw=";
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
