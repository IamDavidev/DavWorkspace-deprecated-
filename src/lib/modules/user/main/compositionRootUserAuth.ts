import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { ControlAuthenticator } from '@lib/modules/user/adapters/drivens/controlAuthenticator.adapter'
import { UserAuthRepository } from '@lib/modules/user/main/root'
import { UserAuthProxyAdapter } from '@lib/modules/user/adapters/drivers/userAuthProxy.adapter'

interface CompositionRootUserAuth {
  userAuthProxy: UserAuthProxyAdapter
}

export function compositionRootUserAuth(): CompositionRootUserAuth {

  const client = createPagesBrowserClient()

  const controlAuthenticator = new ControlAuthenticator(client)


  const userAuthRepository = new UserAuthRepository(controlAuthenticator)

  const userAuthProxy = new UserAuthProxyAdapter(userAuthRepository)

  return {
    userAuthProxy
  }
}
