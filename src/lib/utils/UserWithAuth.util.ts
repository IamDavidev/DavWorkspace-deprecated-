import { redirect } from "next/navigation";

import {
  type IUserServer,
  UserServerRepository,
} from "@lib/repositories/UserServer.repository";
interface IUserWithAuthProps {
  urlRedirect: string;
}
export async function userWithAuthServer(
  { urlRedirect }: IUserWithAuthProps,
): Promise<IUserServer> {
  const { user, error } = await UserServerRepository.getUserServer();

  if (user === null) {
    redirect(urlRedirect);
  }

  return {
    user,
    error,
  };
}
