import type { PostgrestError } from "@supabase/supabase-js";

import { EMPTY_ERROR } from "@constants/DB.conts";

export interface IResponseOk {
  isOk: boolean;
  error: {
    message: string;
    code: string | null;
    status: number | string;
    details: string | null;
  };
}

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
