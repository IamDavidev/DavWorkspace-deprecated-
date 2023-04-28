import {
  ControlAuthenticator,
  UserAuthRepository,
} from "./repository/UserAuth.respository";

interface ICompositionRootUserAuth {
  userAuthRepository: UserAuthRepository;
}

export function compositionRootUserAuth(): ICompositionRootUserAuth {
  const controlAuthenticator = new ControlAuthenticator();

  const userAuthRepository = new UserAuthRepository(
    controlAuthenticator,
  );

  return {
    userAuthRepository,
  };
}
