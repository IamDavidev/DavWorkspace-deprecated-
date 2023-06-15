import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { ControlAdapterUser, RepositoryQuerier } from '@lib/modules/user/adapters/drivens/control-querier.adapter'
import { UserRepository } from '@lib/modules/user/main/root'
import { UserProxyAdapter } from '@lib/modules/user/adapters/drivers/userProxy.adapter'

interface CompositionRootUser {
  userProxyAdapter: UserProxyAdapter
}

export function compositionRootUser(): CompositionRootUser {

  const client = createServerComponentClient({
    cookies
  })

  const controlAdapterUser = new ControlAdapterUser()

  const repositoryQuerier = new RepositoryQuerier(client, controlAdapterUser)

  const userRepository = new UserRepository(repositoryQuerier)

  const userProxyAdapter = new UserProxyAdapter(userRepository)

  return {
    userProxyAdapter
  }
}
