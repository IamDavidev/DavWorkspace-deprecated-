import {
  ControlAuthenticator,
  UserAuthRepository
} from './repository/UserAuth.respository'

interface CompositionRootUserAuthResponse {
  userAuthRepository: UserAuthRepository
}

export function compositionRootUserAuth(): CompositionRootUserAuthResponse {
  const controlAuthenticator = new ControlAuthenticator()

  const userAuthRepository = new UserAuthRepository(controlAuthenticator)

  return {
    userAuthRepository
  }
}
