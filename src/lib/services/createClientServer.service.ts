import { cookies, headers } from 'next/headers'
import {
  createServerComponentSupabaseClient,
  type SupabaseClient
} from '@supabase/auth-helpers-nextjs'

export const createClientServer = async (): Promise<SupabaseClient> => {
  return createServerComponentSupabaseClient({
    cookies,
    headers
  })
}
