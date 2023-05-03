import { cookies, headers } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { DocumentRepository } from './root'
import { ControlOperating } from '../adapters/drivens/control-operatier.adapter'
import { RepositoryQuerier } from '../adapters/drivens/repository-querier.adapter'
import { DocumentProxyAdapter } from '../adapters/drivers/documentProxy.adapter'

interface compositionRootDocumentResponse {
  documentProxyAdapter: DocumentProxyAdapter
}

export function compositionRootDocument(): compositionRootDocumentResponse {
  const client = createServerComponentSupabaseClient({
    cookies,
    headers
  })

  const controlOperating = new ControlOperating(client)
  const repositoryQuerier = new RepositoryQuerier(client)

  const documentReponsository = new DocumentRepository(
    controlOperating,
    repositoryQuerier
  )

  const documentProxyAdapter = new DocumentProxyAdapter(documentReponsository)

  return {
    documentProxyAdapter
  }
}
