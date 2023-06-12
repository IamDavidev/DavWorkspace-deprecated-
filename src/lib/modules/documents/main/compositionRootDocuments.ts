import { cookies } from 'next/headers'
import { createRouteHandlerClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { DocumentRepository } from './root'
import { ControlOperator } from '../adapters/drivens/control-operatier.adapter'
import { RepositoryQuerier } from '../adapters/drivens/repository-querier.adapter'
import { DocumentProxyAdapter } from '../adapters/drivers/documentProxy.adapter'

interface CompositionRootDocumentResponse {
  documentProxyAdapter: DocumentProxyAdapter
}

export function compositionRootDocument(): CompositionRootDocumentResponse {
  const client = createServerComponentClient({
    cookies
  })

  const controlOperator = new ControlOperator(client)
  const repositoryQuerier = new RepositoryQuerier(client)

  const documentRepository = new DocumentRepository(
    controlOperator,
    repositoryQuerier
  )

  const documentProxyAdapter = new DocumentProxyAdapter(documentRepository)

  return {
    documentProxyAdapter
  }
}

export function compositionRootDocumentRoutes(): CompositionRootDocumentResponse {
  const client = createRouteHandlerClient({ cookies })

  const controlOperator = new ControlOperator(client)
  const repositoryQuerier = new RepositoryQuerier(client)

  const documentRepository = new DocumentRepository(
    controlOperator,
    repositoryQuerier
  )

  const documentProxyAdapter = new DocumentProxyAdapter(documentRepository)

  return {
    documentProxyAdapter
  }

}
