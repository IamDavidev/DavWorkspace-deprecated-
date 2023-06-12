import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest): Promise<NextResponse> {
  console.log("Middleware called")
  
  const res = NextResponse.next()

  const client = createMiddlewareClient({
    req,
    res
  })

  await client.auth.getSession()

  return res
}
