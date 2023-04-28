import {
  ControllQuerier,
  ForAdapterUser,
  UserRepository,
} from "./repository/User.repository";

interface ICompositionRootUser {
  userRepository: UserRepository;
}
export function compositionRootUser(): ICompositionRootUser {
  const forAdapterUser = new ForAdapterUser();
  const controlQuerier = new ControllQuerier(
    forAdapterUser,
  );
  const userRepository = new UserRepository(
    controlQuerier,
  );

  return {
    userRepository,
  };
}
