import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest): Promise<NextResponse> {
  console.log('middleware')
  const res = NextResponse.next()

  const client = createMiddlewareSupabaseClient({
    req,
    res
  })

  await client.auth.getSession()

  return res
}
