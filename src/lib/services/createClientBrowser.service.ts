import {
  createBrowserSupabaseClient,
  type SupabaseClient
} from '@supabase/auth-helpers-nextjs'

export function createClientBrowser(): SupabaseClient {
  return createBrowserSupabaseClient()
}
